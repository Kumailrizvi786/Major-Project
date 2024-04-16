import React from 'react';
import { Card, Text, Button } from '@radix-ui/themes';
import { PlusCircledIcon,ListBulletIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';

function CreateExercise() {
  return (
    <div className="flex justify-center mt-2 space-x-6">
      <Card className="">
        <div className="flex items-center justify-center mb-6">
          <PlusCircledIcon className="h-12 w-12 text-[#3859C7] mr-3" />
          <Text as="h2" size="4" className="text-2xl font-bold leading-none">Create Exercise</Text>
        </div>
        <Text className="text-gray-700 mb-6">Start creating engaging exercises.</Text>
        <Link to="/create-exercise">
        <Button className="bg-[#3859C7] text-white font-semibold py-3 px-6 rounded-full cursor-pointer transition duration-300">
          Get Started
        </Button>
        </Link>
      </Card>
      <Card className="">
        <div className="flex items-center justify-center mb-6">
          <ListBulletIcon className="h-12 w-12 text-[#3859C7] mr-3" />
          <Text as="h2" size="4" className="text-2xl font-bold leading-none">All Exercises</Text>
        </div>
        <Text className="text-gray-700 mb-6">View all existing exercises.</Text>
        <Button className="bg-[#3859C7] text-white font-semibold py-3 px-6 rounded-full hover:bg-indigo-600 transition duration-300">
          View Exercises
        </Button>
      </Card>
    </div>
  );
}

export default CreateExercise;
