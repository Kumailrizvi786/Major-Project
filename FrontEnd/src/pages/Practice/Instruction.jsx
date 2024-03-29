import React from 'react';
import { Card, Heading, Text, Button } from '@radix-ui/themes';
// import { IconInformationCircle } from '@radix-ui/react-icons';
// import { IconArrowRight } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaInfoCircle } from 'react-icons/fa';
import Breadcrumbs from '../../components/Breadcrumb';
import { IoHomeOutline } from 'react-icons/io5';

const Instruction = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Instruction', href: '/instruction' },
  ];
  return (
    <div className="ml-24 mt-4">
        <div className=''>
         <Breadcrumbs items={breadcrumbs} icon={IoHomeOutline} /> 
      </div>
      {/* <Card className="max-w-md shadow-md rounded-lg overflow-hidden"> */}
        <div className="p-6">
          <div className="flex items-center mb-4">
            <FaInfoCircle className="w-6 h-6 mr-2 text-blue-500" />
            <Heading size="8">
              Instruction For Readers
            </Heading>
          </div>
          <Text className="text-sm text-gray-600 mb-4">
            Read for Speed is a tool designed to help you improve your reading speed and comprehension.
            Follow the instructions below to get started:
          </Text>
          <ol className="list-decimal pl-5">
            <li className="text-gray-800 mb-2">Select a reading material from the provided options.</li>
            <li className="text-gray-800 mb-2">Adjust the reading speed using the controls.</li>
            <li className="text-gray-800 mb-2">Focus on reading the text as quickly as possible while maintaining comprehension.</li>
            <li className="text-gray-800 mb-2">Track your progress and see how your reading speed improves over time.</li>
          </ol>
          <div className="mt-6">
            <Button
              as={Link}
              to="/dashboard"
              className='cursor-pointer'
           
            >
              Get Started
              <FaArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      {/* </Card> */}
    </div>
  );
};

export default Instruction;
