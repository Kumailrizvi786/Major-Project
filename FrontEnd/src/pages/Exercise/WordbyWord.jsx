import axios from 'axios';
import React, { useState } from 'react';
// .env file import
import { toast } from 'react-hot-toast';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import { IoHomeOutline, IoSparklesSharp } from 'react-icons/io5';
import {Button, Heading, Skeleton, TextArea} from '@radix-ui/themes';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumb';
import { useLocation } from 'react-router-dom';
import { RiSpeakFill } from "react-icons/ri";


function WordbyWord() {
  
  const [exercise, setExercise] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [level, setLevel] = useState('easy');

  const maxAgeToGrade = (maxAge) => {
    switch (maxAge) {
      case 8:
        return 'grade1';
      case 10:
        return 'grade2';
      case 12:
        return 'grade3';
      case 14:
        return 'grade4';
      case 16:
        return 'grade5';
      case 18:
        return 'grade6';
      default:
        return '';
    }
  };

const location = useLocation();
const { maxAge } = location.state;
const [ageGroup1, setAgeGroup1] = useState(maxAgeToGrade(maxAge));
console.log(maxAge);


   
const getExercisebyAge = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/exercise/getByAge/${maxAge}`);
    console.log(response.data);
    setExercise(response.data);
    toast.success('Exercise fetched successfully!');
  } catch (error) {
    console.error(error);
  }
};
const handleBegin = async (e) => {
  e.preventDefault();
  getExercisebyAge();
  console.log("Level:", level);
  if (level) { 
    const filteredExercises = exercise.filter(exercise => exercise.difficulty.level === level);
    setFilteredExercises(filteredExercises);

    console.log("Filtered exercises based on level:", filteredExercises);

  } else {
    console.log("No level filter applied (level state variable not defined)");
    console.log("Using all exercises:", exercise);

    // Use allExercises if no level filter is applied
    // ... your code here
  }
}

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
    navigate('/start-reading',{ state: { filteredExercises }}); // Navigate to the StartReading page
  };
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Exercise 2: Subvocalization', href: '/exercise' },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
       <Breadcrumbs items={breadcrumbs} icon={IoHomeOutline} /> 
       
      <Heading size="8" className="mb-4">Exercise 2: Subvocalization <RiSpeakFill className={`ml-1 inline ${loading && "animate-ping"}  `} /></Heading>
      <div className="flex space-x-4 mb-4">
      <select
  value={ageGroup1}
  onChange={(e) => setAgeGroup1(e.target.value)}
  className="border rounded-md px-3 py-2 w-1/3 focus:outline-none disabled:opacity-50 disabled:bg-gray-200"
  disabled
>
  <option value="" >Select your grade</option>
  <option value="grade1">Grade 1 (6-8 Year Old)</option>
  <option value="grade2">Grade 2 (8-10 Year Old)</option>
  <option value="grade3">Grade 3 (10-12 Year Old)</option>
  <option value="grade4">Grade 4 (12-14 Year Old)</option>
  <option value="grade5">Grade 5 (14-16 Year Old)</option>
  <option value="grade6">Grade 6 (16-18+ Year Old)</option>
</select>
  <select
    value={level}
    onChange={(e) => setLevel(e.target.value)}
    className="border rounded-md px-3 py-2 w-1/3 focus:outline-none"
  >
    <option value="">Select Complexity Level</option>
    <option value="Easy">Easy</option>
    <option value="Medium">Medium</option>
    <option value="Hard">Hard</option>
  </select>

  <Button
    onClick={handleBegin}
    className="mt-1 cursor-pointer"
    disabled={loading || !ageGroup1 || !level || !language}
  >
   {loading ? 'Begining...' : 'Begin'} <IoSparklesSharp className="ml-1" />
  </Button>
</div>


      <Skeleton loading={loading}>

      <TextArea
        value={filteredExercises[0]?.content?.text || ''}
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
