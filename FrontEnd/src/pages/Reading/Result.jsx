import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { Heading, Button } from '@radix-ui/themes';
import Breadcrumbs from '../../components/Breadcrumb';
import { Link } from 'react-router-dom';

function ResultPage({ score, totalQuestions, speedReadingResult }) {
  const percentage = ((score / totalQuestions) * 100).toFixed(2);

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }]} icon={IoHomeOutline} />
      <div className="mt-8 text-center">
        <Heading size="4" className="mb-4">Result</Heading>
        <p className="text-2xl mb-4">{`You scored ${score} out of ${totalQuestions}`}</p>
        <p className="text-2xl mb-4">{`Speed Reading: ${speedReadingResult}`}</p>
        <p className="text-xl mb-8">{`Percentage: ${percentage}%`}</p>
        <div className="flex justify-center">
          <Button as={Link} to="/" variant="green" className="mr-4">Home</Button>
          <Button as={Link} to="/quiz" variant="blue">Retake Quiz</Button>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
