import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { Button, Heading } from '@radix-ui/themes';
import Breadcrumbs from '../components/Breadcrumb';
import { useLocation } from 'react-router-dom';

function Test() {
  const location = useLocation();
  const { ageGroup, category, generatedContent } = location.state;

  // Function to handle speed reading options and start reading
  const handleStartReading = (speed) => {
    // Start reading logic...
  };

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Start Reading', href: '/start-reading' },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <Breadcrumbs items={breadcrumbs} icon={IoHomeOutline} />
      <Heading size="8" className="mb-4">Start Reading</Heading>
      {/* Display generated content */}
      <div className="mb-4">
        <p>{generatedContent}</p>
      </div>
      {/* Speed reading options */}
      <div className="flex space-x-4">
        <Button onClick={() => handleStartReading('slow')} className="cursor-pointer">
          Start Slow Reading
        </Button>
        <Button onClick={() => handleStartReading('medium')} className="cursor-pointer">
          Start Medium Reading
        </Button>
        <Button onClick={() => handleStartReading('fast')} className="cursor-pointer">
          Start Fast Reading
        </Button>
      </div>
    </div>
  );
}

export default Test;
