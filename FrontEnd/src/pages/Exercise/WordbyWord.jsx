import axios from 'axios';
import React, { useState } from 'react';
// .env file import
import { toast } from 'react-hot-toast';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import { IoHomeOutline, IoSparklesSharp } from 'react-icons/io5';
import {Button, Heading, Skeleton, TextArea} from '@radix-ui/themes';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumb';


function WordbyWord() {
  const navigate = useNavigate();
  const [ageGroup, setAgeGroup] = useState('');
  const [category, setCategory] = useState('');
  const [language, setLanguage] = useState('hindi');
  const [generatedContent, setGeneratedContent] = useState('');
  const [prompt, setPrompt] = useState('');
    // const [generatedContent, setGeneratedContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

 






  const handleStartReading = () => {
    navigate('/start-reading',{ state: { ageGroup, category, generatedContent }}); // Navigate to the StartReading page
  };
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Exercise', href: '/exercise' },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
       <Breadcrumbs items={breadcrumbs} icon={IoHomeOutline} /> 
       
      <Heading size="8" className="mb-4">Subvocalization <IoSparklesSharp className={`ml-1 inline ${loading && "animate-ping"}  `} /></Heading>
      <div className="flex space-x-4 mb-4">
  <select
    value={ageGroup}
    onChange={(e) => setAgeGroup(e.target.value)}
    className="border rounded-md px-3 py-2 w-1/3 focus:outline-none"
  >
    <option value="">Select your theme</option>
    <option value="child">Science</option>
    <option value="teen">History</option>
    <option value="adult">Literature</option>
  </select>
  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="border rounded-md px-3 py-2 w-1/3 focus:outline-none"
  >
    <option value="">Select Complexity Level</option>
    <option value="literature">Easy</option>
    <option value="science">Medium</option>
    <option value="history">Hard</option>
  </select>

  <Button
    // onClick={handleGenerateContent}
    className="mt-1 cursor-pointer"
    disabled={loading || !ageGroup || !category || !language}
  >
   {loading ? 'Begining...' : 'Begin'} <IoSparklesSharp className="ml-1" />
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

export default WordbyWord;
