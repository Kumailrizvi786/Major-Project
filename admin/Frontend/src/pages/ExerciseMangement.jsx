import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { RiHome2Line } from 'react-icons/ri';
import { Card, Text, Button } from '@radix-ui/themes';
import { UploadIcon, ListBulletIcon } from '@radix-ui/react-icons';

function ExerciseManagement() {
  const breadcrumbsItems = [
    { text: 'Home', link: '/', icon: <RiHome2Line /> },
    { text: 'Exercise Management' },
  ];

  return (
    <div className='flex flex-col pt-16 p-4'>
      <Breadcrumbs items={breadcrumbsItems} />

      <div className="flex flex-wrap gap-4 mt-8">
        {/* Card to add exercise */}
        <Card className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4">
            <UploadIcon className="h-12 w-12 mr-3" />
            <Text as="h2" size="4" className="text-2xl font-bold leading-none">Bulk Upload Exercises</Text>
          </div>
          {/* <Text className="text-gray-700 mb-6">Upload exercises from CSV or Excel file.</Text> */}
          <div className='flex justify-center'>
          <Button className=" text-white font-semibold py-3 px-6 rounded-full cursor-pointer transition duration-300 hover:bg-indigo-600">
            Upload Exercises
          </Button>
            </div>
        </Card>

        {/* Card to view exercises */}
        <Card className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4">
            <ListBulletIcon className="h-12 w-12  mr-3" />
            <Text as="h2" size="4" className="text-2xl font-bold leading-none">View Exercises</Text>
          </div>
          {/* <Text className="text-gray-700 mb-6">View all existing exercises.</Text> */}
          <div className='flex justify-center'>
          <Button className=" text-white font-semibold py-3 px-6 rounded-full cursor-pointer transition duration-300 hover:bg-indigo-600">
            View Exercises
          </Button>
            </div>
        </Card>
        <Card className="p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4">
            <ListBulletIcon className="h-12 w-12  mr-3" />
            <Text as="h2" size="4" className="text-2xl font-bold leading-none">Create Exercises</Text>
          </div>
          {/* <Text className="text-gray-700 mb-6">View all existing exercises.</Text> */}
          <div className='flex justify-center'>
          <Button className=" text-white font-semibold py-3 px-6 rounded-full cursor-pointer transition duration-300 hover:bg-indigo-600">
            Create Exercises
          </Button>
            </div>
        </Card>
      </div>
    </div>
  );
}

export default ExerciseManagement;
