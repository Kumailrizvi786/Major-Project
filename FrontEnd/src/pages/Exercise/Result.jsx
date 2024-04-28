import React from 'react';
import { Button, Card, Heading } from '@radix-ui/themes';
import Breadcrumbs from '../../components/Breadcrumb';
import { IoHomeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Result() {
  // Dummy data for score, speed, and comprehension percentage
  const score = 80;
  const speed = 'Medium';
  const comprehensionPercentage = 70;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Exercise 1: ', href: '/general-exercise' },
          { label: 'Result' },
        ]}
        icon={IoHomeOutline}
      />
      <Heading as="h1" className="text-3xl font-bold mb-8">
        Result
      </Heading>

      <Card className="p-6 mb-8">
        <Heading as="h2" className="text-xl font-bold mb-4">
          Your Score: {score}
        </Heading>
        <Heading as="h3" className="text-lg font-bold mb-4">
          Reading Speed: {speed}
        </Heading>
        <Heading as="h3" className="text-lg font-bold mb-4">
          Comprehension Percentage: {comprehensionPercentage}%
        </Heading>
      </Card>

      {/* Home button */}
      <Link to="/">
        <Button className="mr-2">
          Home <IoHomeOutline />
        </Button>
      </Link>
    </div>
  );
}

export default Result;
