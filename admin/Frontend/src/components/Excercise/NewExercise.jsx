import React, { useState } from 'react';
import { ArrowRightIcon, ArrowUpIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import { Button,Text, TextArea, Card, Flex, TextField, Skeleton } from '@radix-ui/themes';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeLowVision } from 'react-icons/fa6';
import { IoSparklesSharp } from 'react-icons/io5';
import { Dialog } from '@radix-ui/themes';
import { RiFormatClear } from 'react-icons/ri';
import toast from 'react-hot-toast';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';



function NewExercise() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');
  const [level, setLevel] = useState('');
  const [contentType, setContentType] = useState('');
  const [text, setText] = useState('');
  const [contentDescription, setContentDescription] = useState('');
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);
  const [disabled, setDisbled] = useState(false);
  const [generatedContent, setGeneratedContent] = useState({
    name: '',
    description: '',
    minAge: 6,
    maxAge: 12,
    level: '',
    contentType: '',
    text: '',
    image: '',
    contentDescription: '',
    question: '',
    options: ['', '', '', ''],
    correctAnswer: ''
  });

  const handlechange = (e) => {
    console.log(e.target.value)
    if (e.target.value === 'text') {
      setDisbled(true);
    }
  }

  const [questions, setQuestions] = useState([
    { question: '', options: [], correctAnswer: '' },
  ]);

  const handleAddQuestion = () => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      { question: '', options: [], correctAnswer: '' },
    ]);
  };

  const handleQuestionChange = (index, field, value) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index][field] = value;
      return updatedQuestions;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formattedQuestions = questions.map((question) => ({
        question: question.question,
        options: question.options,
        correctAnswer: question.correctAnswer,
      }));
  
      const response = await fetch('http://localhost:8000/admin/exercise/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          description,
          difficulty: { minAge, maxAge, level },
          contents: [
            {
              contentType,
              text,
              description: contentDescription,
              mcqs: formattedQuestions,
            },
          ],
        }),
      });
      const data = await response.json();
      console.log('Exercise created:', data);
      // Optionally, you can reset the form fields after submission
      setName('');
      setDescription('');
      setMinAge('');
      setMaxAge('');
      setLevel('');
      setContentType('');
      setText('');
      setContentDescription('');
      setQuestions([{ question: '', options: ['', ''], correctAnswer: '' }]);
      toast.success('Exercise Created Successfully!');
      navigate('/all-exercises');
    } catch (error) {
      console.error('Error:', error);
      setError('Something went wrong. Please try again.');
      toast.error('Failed to create exercise. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  


  const YOUR_GEMINI_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

  const handleGenerate = async () => {
    // e.preventDefault();
    // Generate dummy data for exercise using gemini API in this format 
    const prompt = `Generate an exercise for children aged 6-12 years about history. The exercise should be easy and text-only. The exercise should contain a question with multiple-choice options. Here is an example of the exercise response data format:
      data should only be in this format , no other content should be there (dont include ''' also)
    {
      name: 'keep it for exercise name( Fixation or Subvocalization)',
      description: 'generate description here in 50 characters',
      minAge: 'keep it according to the age group(e.g 6)',
      maxAge: 'keep it according to the age group(e.g 12)',
      level: 'according to the difficulty level(e.g easy, medium, hard)',
      contentType: 'text',
      text: 'generate text about title here in min 200 characters',
      image: 'https://via.placeholder.com/150',
      contentDescription: 'Additional content description.',
      question: 'e.g What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      correctAnswer: 'Paris'
    }`;
    
    //generating here
    // console.log('api key:',YOUR_GEMINI_API_KEY )
    try {
      setLoading(true);
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
        console.log('Generated Content:', response.text());
        setLoading(false);
    
      } catch (error) {
        console.error('Error:', error);
        setError('Something went wrong. Please try again.');
  
      } finally {
        setLoading(false);
      }

    console.log(generatedContent);
    
    

    // Update state with generated data
    setName(generatedContent.name);
    setDescription(JSON.stringify(generatedContent));
    setMinAge(generatedContent.minAge);
    setMaxAge(generatedContent.maxAge);
    setLevel(generatedContent.level);
    setContentType(generatedContent.contentType);
    setText(generatedContent.text);
    setImage(generatedContent.image);
    setContentDescription(generatedContent.contentDescription);
    setQuestion(generatedContent.question);
    setOptions(generatedContent.options);
    setCorrectAnswer(generatedContent.correctAnswer);
    toast.success('Exercise Generated Successfully!')
  };
  

  const handleClearForm = (e) => {
    e.preventDefault();
   
    // Optionally, you can reset the form fields after submission
    setName('');
    setDescription('');
    setMinAge('');
    setMaxAge('');
    setLevel('');
    setContentType('');
    setText('');
    setImage(null);
    setContentDescription('');
    setQuestion('');
    setOptions(['', '']);
    setCorrectAnswer('');

    toast.success('Form Cleared Successfully!')
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <Card className="p-6 mt-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <PlusCircledIcon className="h-8 w-8 text-[] mr-3" />
          <h2 className="text-2xl font-bold leading-none">Create New Exercise</h2>
        </div>
      
        <div className="flex items-center gap-2">
        <Dialog.Root>
  <Dialog.Trigger>
  <Button color='plum' radius="full" className="cursor-pointer">
            Generative Fill <IoSparklesSharp/>
          </Button>
  </Dialog.Trigger>

  <Dialog.Content maxWidth="450px">
    <Dialog.Title>Generative Fill <IoSparklesSharp className='inline'/></Dialog.Title>
    <Dialog.Description size="2" mb="4">
      Fill the form to generate exercises.
    </Dialog.Description>

    <Flex direction="column" gap="3">
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Enter Age Group
        </Text>
        <TextField.Root
          defaultValue="Child"
          placeholder="Enter age group"
        />
      </label>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Enter Category
        </Text>
        <TextField.Root
          defaultValue="History"
          placeholder="enter category"
        />
      </label>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Enter language
        </Text>
        <TextField.Root
          defaultValue="Hindi"
          placeholder="Enter language"
        />
      </label>
    </Flex>

    <Flex gap="3" mt="4" justify="end">
      <Dialog.Close>
        <Button variant="soft" color="gray">
          Cancel
        </Button>
      </Dialog.Close>
      <Dialog.Close>
        <Button onClick={handleGenerate}>Generate <IoSparklesSharp/></Button>
      </Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>
       
        <Link to="/all-exercises">
          <Button radius="full" className="cursor-pointer">
            View All Exercise <FaEye/>
          </Button>
        </Link>
      
          </div>
        
      </div>
      <form onSubmit={handleSubmit}>
        {/* Exercise name */}
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <Skeleton loading={loading}>
          <TextField.Root
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter exercise name"
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          </Skeleton>
        </div>
        {/* Exercise description */}
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Description
          </label>
          <Skeleton loading={loading}>
          <TextArea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter exercise description"
          ></TextArea>
          </Skeleton>
        </div>
        {/* Minimum and maximum age */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="minAge">
              Minimum Age
            </label>
            <Skeleton loading={loading}>
            <TextField.Root
              id="minAge"
              type="number"
              value={minAge}
              onChange={(e) => setMinAge(e.target.value)}
              placeholder="Enter minimum age"
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            </Skeleton>
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="maxAge">
              Maximum Age
            </label>
            <Skeleton loading={loading}>
            <TextField.Root
              id="maxAge"
              type="number"
              value={maxAge}
              onChange={(e) => setMaxAge(e.target.value)}
              placeholder="Enter maximum age"
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            </Skeleton>
          </div>
        </div>
        {/* Difficulty level */}
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="level">
            Level
          </label>
          <select
            id="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select level</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        {/* Content type */}
        {/* Content type */}
<div className="mb-6">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="contentType">
    Content Type
  </label>
  <select
    id="contentType"
    value={contentType}
    onChange={(e) =>{ setContentType(e.target.value); handlechange(e);}}
    required
    // onChange={handlechange}
    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  >
    <option value="" >Select Content Type</option>
    {/* <option value="AI Generated">AI Generated</option> */}
    <option value="text">Text only</option>
    <option value="textOnImage">Image with Text</option>
  </select>
</div>

        {/* Text content */}
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="text">
            Text
          </label>
          <TextArea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text"
          ></TextArea>
        </div>
        {/* Image upload */}
      { !disabled && <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="image" >
            Image Url
          </label>
          <TextField.Root
            id="image"
            type="text"
            placeholder='Enter image url'
            onChange={handleImageChange}
            required
            // disabled={disabled}
            // readOnly={disabled}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>}
        {/* Content description */}
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="contentDescription">
            Content Description
          </label>
          <TextArea
            id="contentDescription"
            value={contentDescription}
            onChange={(e) => setContentDescription(e.target.value)}
            placeholder="Enter content description"
          ></TextArea>
        </div>
        <div>
      {questions.map((question, index) => (
        <div key={index}>
          {/* Question */}
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor={`question-${index}`}>
              Question {index + 1}
            </label>
            <TextField.Root
              id={`question-${index}`}
              type="text"
              value={question.question}
              onChange={(e) => handleQuestionChange(index, 'question', e.target.value)}
              placeholder="Enter question"
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* Options */}
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor={`options-${index}`}>
              Options for Q-{index + 1}
            </label>
            <TextField.Root
              id={`options-${index}`}
              type="text"
              value={question.options.join(',')}
              onChange={(e) => handleQuestionChange(index, 'options', e.target.value.split(','))}
              placeholder="Enter comma-separated options"
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* Correct answer */}
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor={`correctAnswer-${index}`}>
              Correct Answer for Q-{index + 1}
            </label>
            <TextField.Root
              id={`correctAnswer-${index}`}
              type="text"
              value={question.correctAnswer}
              onChange={(e) => handleQuestionChange(index, 'correctAnswer', e.target.value)}
              placeholder="Enter correct answer"
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
      ))}
      </div>
      {/* Add more question button */}
      <div className="flex justify-center gap-2">
        <Button onClick={handleAddQuestion} className="w-half">
          Add more Question <PlusCircledIcon />
        </Button>
     
   
        <Button type="submit" className="w-half cursor-pointer">
        Submit Excercise  <ArrowRightIcon/>
        </Button>
        <Button onClick={handleClearForm} type="submit" className="w-half cursor-pointer">
         Clear Form <RiFormatClear/>
        </Button>
        </div>


      </form>
    </Card>
  );
}

export default NewExercise;
