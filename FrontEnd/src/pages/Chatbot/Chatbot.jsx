import React, { useState } from 'react';
import { IoChatbubblesOutline, IoSend } from 'react-icons/io5';
import { Button } from '@radix-ui/themes';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

const chatbotData = [
  {
    question: "Hi",
    answer: "Hi there! How can I help you today?"
  },
  {
    question: "What can you do?",
    answer: "I can answer your questions about using this platform and provide helpful tips."
  },
  {
    question: "Explain Speed Reading?",
    answer: "Unfortunately, I can't answer very specific questions yet."
  },
];

function Chatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState([
    "Hi",
    "What can you do?",
  ]);
  const [prompt, setPrompt] = useState("");

  const YOUR_GEMINI_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

  const findMatchingResponse = (userInput) => {
    const matchedQuestion = chatbotData.find(
      (data) => data.question.toLowerCase() === userInput.toLowerCase()
    );
    return matchedQuestion ? matchedQuestion.answer : "Try to ask that is related to speed reading.";
  };

  const handleOpenChatbot = () => {
    setIsChatOpen(true);
  };

 

  const handleCloseChatbot = () => {
    setIsChatOpen(false);
  };

  const handleprompt = () => {
    setPrompt("Hi there! How can I help you today?");
  };


  const handleMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);
    const prompt = "Here is my Instructions for you \n\n" + 
    "1. if my question is not related to speed reading you must answer that 'its not related to speed reading try to ask that is related to speed reading' \n" +
      "2. Keep your response in maximum 50 character\n" +
      "3. include emoji but do not include special format like ** etc \n" +
      "4. here is my question \n\n" +
      `Question: ${value} \n\n` 

    setPrompt(prompt);

    // Find suggestions based on user input
    const matchedSuggestions = chatbotData
      .filter((data) => data.question.toLowerCase().includes(value.toLowerCase()))
      .map((data) => data.question);
    setSuggestions(matchedSuggestions);
  };

  const handleSuggestionClick = (text) => {
    setMessage(text);
    handleSendMessage();
    setSuggestions([]);
  };

  const handleSendMessage = async () => {
    if (message.trim() === '') return;
  
    // Add user message to the messages state
    setMessages(prevMessages => [...prevMessages, { text: message, sender: 'user' }]);
    setMessage('');
    setIsTyping(true);
  
    try {
      // Start a chat session
      const genAI = new GoogleGenerativeAI(YOUR_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: 'gemini-1.0-pro' });
      const generationConfig = {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
      }; 
      const safetySettings = [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ];
  
      // Create history with the user message
      // const history = [{ role: 'user', parts: [{ text: message }] }];
  
      // Send user message to the chat session
      const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: [
          { role: 'user', parts: [{ text: 'hi' }] },
          { role: 'model', parts: [{ text: 'Hello there! How can I assist you today?' }] },
          { role: 'user', parts: [{ text: 'hello' }] },
          { role: 'model', parts: [{ text: 'Hello! How are you doing today? Is there anything I can help you with?' }] },
        ],
      });
  
      // Send message to the chat session and get response
      const result = await chat.sendMessage(prompt);
      const response = result.response;
  
      // Add chatbot response to the messages state
      setMessages(prevMessages => [...prevMessages, { text: response.text(), sender: 'chatbot' }]);
    } catch (error) {
      console.error('Error:', error);
      // Handle error by adding an error message to the messages state
      setMessages(prevMessages => [...prevMessages, { text: "Something went wrong. Please try again.", sender: 'chatbot' }]);
    } finally {
      // Set isTyping to false after response is received or error occurs
      setIsTyping(false);
    }
  };
  
  

  return (
    <div>
      {isChatOpen && (
        <div className="fixed bottom-20 right-8 z-50" style={{ width: '450px'}}> 
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 ">
            <div className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-t-lg">
              <h2 className="text-lg font-semibold text-gray-800">Tips with Chatbot</h2>
              <button
                onClick={handleCloseChatbot}
                className="text-gray-600 hover:text-gray-800 cursor-pointer focus:outline-none"
              >
                <IoChatbubblesOutline className="text-xl inline mr-1" />
                Close Chat
              </button>
            </div>
            <div className="p-4 h-48 overflow-y-auto">
  {messages.map((msg, index) => (
    <div key={index} className="flex justify-center">
      {msg.sender === 'user' ? (
        <div className="flex justify-end w-full my-3">
          <div className="bg-gray-100 rounded-full py-1 px-2 border border-gray-200 max-w-[80%]">
            {msg.text}
          </div>
        </div>
      ) : (
        <div className="flex justify-start w-full">
          <div className="bg-gray-200 rounded-full py-4 px-8 border border-gray-200 max-w-[80%]">
            {msg.text}
          </div>
        </div>
      )}
    </div>
  ))}
  {isTyping && <div className="text-sm text-gray-500 text-right">Generating Response...</div>}
</div>

            <div className="flex items-center px-4 py-2 border-t border-gray-200">
              <input
                type="text"
                value={message}
                onChange={handleMessageChange}
                placeholder="Chat here..."
                className="flex-grow mr-2 border-none focus:ring-0"
              />
              <Button onClick={handleSendMessage} className="cursor-pointer">
                <IoSend />
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-8 right-8 z-10">
        <button
          className="bg-[#3859C7] cursor-pointer text-white py-2 px-4 rounded-full shadow-md flex items-center justify-center"
          onClick={handleOpenChatbot}
        >
          <IoChatbubblesOutline className="mr-2 text-lg" />
          Tips with chatbot
        </button>
      </div>

      {isChatOpen && suggestions.length > 0 && (
        <div className="fixed bottom-32 right-8 z-50">
          <div className="shadow-md border border-gray-200 rounded-lg py-2 px-4">
            <p className="text-sm text-gray-600 mb-1">Suggestions:</p>
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                className="mr-2 mb-2 px-3 py-1 rounded-full text-sm"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
