import React from 'react';
import { Box, Button, Heading } from '@radix-ui/themes';
import { IoInformationCircle } from 'react-icons/io5';
import { FaArrowRight } from 'react-icons/fa';

const Instruction = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Box className="max-w-md  shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <IoInformationCircle className="w-6 h-6 mr-2 text-blue-500" />
            <Heading as="h1" className="text-lg font-semibold text-gray-800">Welcome to Read for Speed!</Heading>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Read for Speed is a tool designed to help you improve your reading speed and comprehension. 
            Follow the instructions below to get started:
          </p>
          <ol className="list-decimal pl-5">
            <li className="text-gray-800 mb-2">Select a reading material from the provided options.</li>
            <li className="text-gray-800 mb-2">Adjust the reading speed using the controls.</li>
            <li className="text-gray-800 mb-2">Focus on reading the text as quickly as possible while maintaining comprehension.</li>
            <li className="text-gray-800 mb-2">Track your progress and see how your reading speed improves over time.</li>
          </ol>
          <div className="mt-6">
            <Button
              as="a"
              href="/dashboard"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Get Started
              <FaArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Instruction;
