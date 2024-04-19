import React from 'react';
import {
  Badge,
  Box,
  Button,
  Card,
  Heading,
  Flex,
  Text,
} from '@radix-ui/themes';
import { IoHomeOutline, IoSparklesOutline } from 'react-icons/io5';
import { FaMicrophone, FaRegLightbulb, FaUpload, FaWrench } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumb';

function AllExercise() {
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'All Exercise', href: '/exercise' },
    ];
  const exercises = [
    { title: 'General Exercises', icon: <FaRegLightbulb />, path: "/general-exercise", level: "Easy" },
    // { title: 'Fixations Exercise', icon: <FaWrench />, path: "/fixations", level: "Medium" },
    { title: 'Generative Exercise', icon: <IoSparklesOutline />, path: "/generative-exercise", level: "Hard" },
    { title: 'Vocab Exercise', icon: <FaRegLightbulb />, path: "/vocab-exercise", level: "Easy" },
    { title: 'Voice Exercise', icon: <FaMicrophone />, path: "/voice-exercise", level: "Medium" },
    { title: 'Text Import and Sync', icon: <FaUpload />, path: "/text-import", level: "Medium" } // Added text import exercise
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbs} icon={IoHomeOutline} />
      <Heading as="h1" className="text-3xl font-bold mb-8">
        All Exercise
      </Heading>
      <Flex gap="4" wrap="wrap">
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} {...exercise} />
        ))}
      </Flex>
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
      <Button className="mt-4" variant="ghost">
        View Exercises
      </Button>
        </Link>
    </Card>
  );
};

export default AllExercise;
