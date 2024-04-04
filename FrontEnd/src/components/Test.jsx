import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { Heading } from '@radix-ui/themes';
import Breadcrumbs from '../components/Breadcrumb';
import { useLocation } from 'react-router-dom';
import SpeedReadingPage from '../pages/Reading/SpeedReadingPage'; // Import the SpeedReadingPage component

function Test() {
  const location = useLocation();
  const { generatedContent } = location.state;

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Start Reading', href: '/start-reading' },
  ];



  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <Breadcrumbs items={breadcrumbs} icon={IoHomeOutline} />
      <Heading size="8" className="mb-4">Start Reading</Heading>
      {/* Use SpeedReadingPage component and pass generatedContent */}
      <SpeedReadingPage content={generatedContent} />
    </div>
  );
}

export default Test;
