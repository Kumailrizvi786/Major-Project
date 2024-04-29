import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { Heading } from '@radix-ui/themes';
import Breadcrumbs from '../components/Breadcrumb';
import { useLocation } from 'react-router-dom';
import SpeedReadingPage from '../pages/Reading/SpeedReadingPage'; // Import the SpeedReadingPage component

function Test() {
  const location = useLocation();
  const { filteredExercises } = location?.state;
  console.log('Filtered Exercises:', location);
  const { generatedContent } = location?.state;
  console.log('Filtered Exercises:', filteredExercises);
  // console.log('Generated Content:', location);
  console.log('Generated Content:', generatedContent);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Start Reading', href: '/start-reading' },
  ];



  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <Breadcrumbs items={breadcrumbs} icon={IoHomeOutline} />
      <Heading size="8" className="mb-4">Start Reading</Heading>
      {/* Use SpeedReadingPage component and pass generatedContent */}
      {filteredExercises && <SpeedReadingPage content={filteredExercises[0]?.content?.text} filteredExercises={filteredExercises} />} 
     { generatedContent && <SpeedReadingPage content={generatedContent} filteredExercises={filteredExercises} /> }
    </div>
  );
}

export default Test;
