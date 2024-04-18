import React from 'react';
import { Card, Text, Button } from '@radix-ui/themes';
import { PlusCircledIcon, ListBulletIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';

function CreateExercise() {
  return (
    <div className="flex justify-center mt-8 space-x-8">
      <Card className="p-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
        <div className="flex items-center justify-center mb-6">
          <PlusCircledIcon className="h-12 w-12 text-[#3859C7] mr-3" />
          <Text as="h2" size="4" className="text-2xl font-bold leading-none">Create Exercise</Text>
        </div>
        {/* <Text className="text-gray-700 mb-6">Start creating engaging exercises.</Text> */}
        <div className='flex justify-center'>
        <Link to="/create-exercise">
          <Button className="bg-[#3859C7] text-white font-semibold py-3 px-6 rounded-full cursor-pointer transition duration-300 hover:bg-indigo-600">
            Get Started
          </Button>
        </Link>
        </div>
      </Card>
      <Card className="p-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
        <div className="flex items-center justify-center mb-6">
          <ListBulletIcon className="h-12 w-12 text-[#3859C7] mr-3" />
          <Text as="h2" size="4" className="text-2xl font-bold leading-none">All Exercises</Text>
        </div>
        {/* <Text className="text-gray-700 mb-6">View all existing exercises.</Text> */}
        <div className='flex justify-center'>
        <Link to="/all-exercises">
          <Button className="bg-[#3859C7] text-white font-semibold py-3 px-6 rounded-full cursor-pointer transition duration-300 hover:bg-indigo-600">
            View Exercises
          </Button>
        </Link>
        </div>
      </Card>
    </div>
  );
}

export default CreateExercise;
