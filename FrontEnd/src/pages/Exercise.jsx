import axios from 'axios';
import React, { useState } from 'react';
// .env file import
import { toast } from 'react-hot-toast';
import { IoIosRefreshCircle } from 'react-icons/io';
import { IoSparklesSharp } from 'react-icons/io5';

function Exercise() {
  const [ageGroup, setAgeGroup] = useState('');
  const [category, setCategory] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');

  // Function to generate content using ChatGPT
 // Function to generate content using ChatGPT
const generateContent = async (prompt) => {
  try {
    console.log("generating content")
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant.',
          },
          {
            role: 'user',
            content: generatedContent,
          },
        ],
      },
      {
        headers: {
          'Authorization': 'Bearer ' + 'api key here',
          'Content-Type': 'application/json',
        },
      }
    );
    const data = response.data;
    console.log('Response data:', data);
    setGeneratedContent(data.choices[0].text);
  } catch (error) {
    toast.error('Error generating content:', error);
    console.error('Error generating content:', error);
  }
};


  const handleGenerateContent = () => {
    // Construct prompt based on age group and category
    const prompt = `Generate a reading exercise for ${ageGroup} on ${category}.`;
    console.log(prompt)
    generateContent(prompt);
  };

  return (
    <div className="max-w-md mx-auto mt-8 px-4">
      <h1 className="text-center text-2xl font-bold mb-4">Exercise Page</h1>
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
        <button
          onClick={handleGenerateContent}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Generate <IoSparklesSharp className="ml-1" />
        </button>
      </div>
      <textarea
        value={generatedContent}
        placeholder="Generated Content will appear here"
        rows={6}
        className="w-full resize-none border rounded-md p-2 focus:outline-none"
      />
      <div className='flex justify-between'>
      <button
        onClick={() => setGeneratedContent('')}
        className="mt-4 flex items-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
      >
        Clear <IoIosRefreshCircle className="ml-1" />
      </button>
      {/* button for start reading */}
      <button
        className="mt-4 flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none"
      >
        Start Reading <IoIosRefreshCircle className="ml-1" />
      </button>
      </div>

    </div>
  );
}

export default Exercise;
