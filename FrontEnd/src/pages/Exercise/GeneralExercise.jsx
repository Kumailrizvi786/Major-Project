import React, { useState } from 'react';
import {
  Badge,
  Box,
  Button,
  Callout,
  Card,
  Flex,
  Heading,
  Select,
  Text,
} from '@radix-ui/themes';
import { IoHomeOutline } from 'react-icons/io5';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumb';

function GeneralExercise() {
  const [selectedGrade, setSelectedGrade] = useState('SelectyourGrade');

  const handleGradeChange = (event) => {
    setSelectedGrade(event);
    // console.log(event);
  };

  const exercises = [
    { title: 'Exercise Level 1', level: 'Easy', path: "/general-exercise" },
    { title: 'Fixations Exercise', level: 'Medium', path: "/fixations" },
    { title: 'Generative Exercise', level: 'Hard', path: "/generative-exercise" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'General Exercise', href: '/general-exercise' },
        ]}
        icon={IoHomeOutline}
      />
      <Heading as="h1" className="text-3xl font-bold mb-8">
        General Exercise
      </Heading>
      <Callout.Root>
  <Callout.Icon>
    <InfoCircledIcon />
  </Callout.Icon>
  <Callout.Text>
    Choose your grade to view exercises.
  </Callout.Text>
</Callout.Root>
      <Flex gap="4" alignItems="center" mb="4" className='mt-2'>
        <Text as="label" htmlFor="grade-select" className="font-bold m-1">Choose Your Grade:</Text>
        {/* <select
          id="grade-select"
          value={selectedGrade}
          onChange={handleGradeChange}
            className="border rounded p-2 mb-2"
        >
          <option value="">Select Grade</option>
          <option value="Grade 1">Grade 1</option>
          <option value="Grade 2">Grade 2</option>
          <option value="Grade 3">Grade 3</option>
          {/* Add more grade options 
        </select> */}
            <Select.Root onValueChange={handleGradeChange} defaultValue={selectedGrade}>
    <Select.Trigger variant="classic" />
    <Select.Content>
      <Select.Item value="SelectyourGrade">Select Your Grade</Select.Item>
      <Select.Item value="grade1">Grade 1</Select.Item>
      <Select.Item value="grade2">Grade 2</Select.Item>
      <Select.Item value="grade3">Grade 3</Select.Item>
      <Select.Item value="grade4">Grade 3</Select.Item>
    </Select.Content>
  </Select.Root>
      </Flex>
      {selectedGrade !== "SelectyourGrade" && (
        <Flex gap="4" wrap="wrap">
          {exercises.map((exercise, index) => (
            <ExerciseCard key={index} {...exercise}  />
          ))}
        </Flex>
      )}
    </div>
  );
}

const ExerciseCard = ({ title, icon, path, level }) => {
    let badgeColor = 'default';
  
    if (level === 'Easy') {
      badgeColor = 'green';
    } else if (level === 'Medium') {
      badgeColor = 'default';
    } else if (level === 'Hard') {
      badgeColor = 'plum';
    }
  
    return (
        <Card className="p-4 w-70 max-w-xs rounded-lg">
        <Flex alignItems="center" justify="space-between" gap="2">
          <Flex alignItems="center" gap="2">
            <Box className="flex-shrink-0 mt-1">{icon}</Box>
            <Text className="text-lg font-semibold">{title}</Text>
          </Flex>
          <Badge color={badgeColor} radius="full" className="text-xs mt-1">{level}</Badge>
        </Flex>
        <Link to={path} className="mt-4">
          <Button variant="ghost" >
            View Exercises
          </Button>
        </Link>
      </Card>
      
    );
  };

export default GeneralExercise;
