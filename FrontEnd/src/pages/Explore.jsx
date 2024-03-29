import React from 'react';
import { Box, Card, Text, Heading, Button } from '@radix-ui/themes';
import { IoHomeOutline, IoSearchOutline } from 'react-icons/io5';
import { RiArticleLine } from 'react-icons/ri';
import { FaBookOpen } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb';

const Explore = () => {
  
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Explore', href: '/explore' },
  ];

  return (
    <div className="max-w-3xl mx-auto mt-8 px-4">
         <Breadcrumb items={breadcrumbs} icon={IoHomeOutline} /> 
      <Heading size="8" className="mb-8">Explore</Heading>
      <Box className="grid gap-6 md:grid-cols-2">
        <Card className="p-6 flex flex-col justify-center items-center">
          <RiArticleLine size="32" className="mb-4" />
          <Heading size="3" className="text-center mb-4">Articles</Heading>
          <Text size="2" className="text-center text-gray-600 mb-4">
            Explore a variety of articles on different topics.
          </Text>
          <Button className="w-full" variant="soft">
            Explore Articles
          </Button>
        </Card>
        <Card className="p-6 flex flex-col justify-center items-center">
          <FaBookOpen size="32" className="mb-4" />
          <Heading size="3" className="text-center mb-4">Books</Heading>
          <Text size="2" className="text-center text-gray-600 mb-4">
            Discover new books and dive into captivating stories.
          </Text>
          <Button className="w-full cursor-pointer" variant="soft" >
            Explore Books
          </Button>
        </Card>
      </Box>
      <Button className="mt-8 w-full flex items-center justify-center cursor-pointer" variant="outline">
        <IoSearchOutline className="mr-2" /> Explore All
      </Button>
    </div>
  );
};

export default Explore;
