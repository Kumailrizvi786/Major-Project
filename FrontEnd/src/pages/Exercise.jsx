import axios from 'axios';
import React, { useState } from 'react';
// .env file import
import { toast } from 'react-hot-toast';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import { IoHomeOutline, IoSparklesSharp } from 'react-icons/io5';
import {Button, Heading, Skeleton, TextArea} from '@radix-ui/themes';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumb';

function Exercise() {
  const navigate = useNavigate();
  const [ageGroup, setAgeGroup] = useState('');
  const [category, setCategory] = useState('');
  const [language, setLanguage] = useState('hindi');
  const [generatedContent, setGeneratedContent] = useState('');
  const [prompt, setPrompt] = useState('');
    // const [generatedContent, setGeneratedContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const YOUR_GEMINI_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const generateContent = async (prompt) => {
    setLoading(true);
    setError(null);
  try {
  //  console.log(prompt)
  const genAI = new GoogleGenerativeAI(YOUR_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.0-pro' });  

    const generationConfig = {
      temperature: 0.9, // Controls randomness (0 = deterministic, 1 = creative)
      topK: 1, // Controls beam search (higher = less diverse)
      topP: 1, // Controls nucleus sampling (higher = less risky)
      maxOutputTokens: 2048, // Maximum output length
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
    const result = await chat.sendMessage(prompt); // Use user prompt here
    const response = result.response;
    setGeneratedContent(response.text());

  } catch (error) {
    console.error('Error:', error);
    setError('Something went wrong. Please try again.');
  } finally {
    setLoading(false);
  }
};


  const handleGenerateContent = () => {
    toast.success("Generating content...")
    // Construct prompt based on age group and category
    const prompt = `Generate a reading exercise text for ${ageGroup} on ${category} in ${language} in 200 Character.`;
    console.log(prompt)
    setPrompt(prompt);
    generateContent(prompt);
  };

  const handleStartReading = () => {
    navigate('/start-reading',{ state: { ageGroup, category, generatedContent:generatedContent }}); // Navigate to the StartReading page
  };
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Exercise', href: '/exercise' },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
       <Breadcrumbs items={breadcrumbs} icon={IoHomeOutline} /> 
       
      <Heading size="8" className="mb-4">Generative Practice <IoSparklesSharp className={`ml-1 inline ${loading && "animate-ping"}  `} /></Heading>
      <div className="flex space-x-4 mb-4">
  <select
    value={ageGroup}
    onChange={(e) => setAgeGroup(e.target.value)}
    className="border rounded-md px-3 py-2 w-1/3 focus:outline-none"
  >
    <option value="">Select Age Group</option>
    <option value="child">Child</option>
    <option value="teen">Teen</option>
    <option value="adult">Adult</option>
  </select>
  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="border rounded-md px-3 py-2 w-1/3 focus:outline-none"
  >
    <option value="">Select Category</option>
    <option value="literature">Literature</option>
    <option value="science">Science</option>
    <option value="history">History</option>
  </select>
  <select
    value={language}
    onChange={(e) => setLanguage(e.target.value)}
    className="border rounded-md px-3 py-2 w-1/3 focus:outline-none"
  >
    <option value="">Select Language</option>
    <option value="english">English</option>
    <option value="spanish">Spanish</option>
    <option value="french">French</option>
    <option value="hindi">Hindi</option>
  </select>
  <Button
    onClick={handleGenerateContent}
    className="mt-1 cursor-pointer"
    disabled={loading || !ageGroup || !category || !language}
  >
   {loading ? 'Generating...' : 'Generate'} <IoSparklesSharp className="ml-1" />
  </Button>
</div>


      <Skeleton loading={loading}>

      <TextArea
        value={generatedContent}
        placeholder="Generated Content will appear here"
        rows={6}
        className="w-full resize-none border rounded-md p-2 focus:outline-none"
        />
        </Skeleton>
      <div className='flex justify-between'>
      <Button
        onClick={() => setGeneratedContent('')}
        className="mt-4 cursor-pointer"
      >
        Clear
      </Button>
      {/* button for start reading */}
      <Button onClick={handleStartReading} className="mt-4 cursor-pointer">
          Start Reading
        </Button>
      </div>
    </div>
  );
}

export default Exercise;
