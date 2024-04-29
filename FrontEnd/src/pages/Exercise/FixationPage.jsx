import React, { useState, useEffect } from 'react';
import { Badge, Button, Card, Heading, Text } from '@radix-ui/themes';
import { IoPlayCircleOutline, IoPauseCircleOutline } from 'react-icons/io5';
import { FiChevronRight, FiSettings } from 'react-icons/fi';
import Breadcrumbs from '../../components/Breadcrumb';
import { IoHomeOutline } from 'react-icons/io5';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function FixationExercise() {
  const location = useLocation();
  const [exercise, setExercise] = useState([]);
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(300); // Default speed in milliseconds
  const [highlightColor, setHighlightColor] = useState('green'); // Default highlight color

  // Fetch exercise data based on location state
  useEffect(() => {
    const fetchExerciseByAge = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/exercise/getByAge/${location.state.maxAge}`);
        setExercise(response.data);
        toast.success('Exercise fetched successfully!');
      } catch (error) {
        console.error(error);
      }
    };
    fetchExerciseByAge();
  }, [location.state.maxAge]);

  // Extract sample text from exercise data
  useEffect(() => {
    const sampleText = exercise[0]?.content?.text;
    if (sampleText) setWords(sampleText.split(' '));
  }, [exercise]);

  // Function to start or pause the exercise
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Function to handle speed change
  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
  };

  // Function to handle color change
  const handleColorChange = (newColor) => {
    setHighlightColor(newColor);
  };

  // Function to move to the next word
  const nextWord = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsPlaying(false); // Stop playing when reached the end of text
    }
  };

  // Start/stop interval for word highlighting
  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(nextWord, speed);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying, currentIndex, speed]);

  // Construct the text with highlighted current word
  const constructText = () => {
    return words.map((word, index) => {
      if (index === currentIndex) {
        return (
          <Text key={index} className={`bg-${highlightColor}-100 rounded p-1 animate-pulse`}>
            {word}
          </Text>
        );
      } else {
        return <Text key={index}>{word}</Text>;
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Exercise 3: Fixation Type 2 Exercise', href: '/general-exercise' },
        ]}
        icon={IoHomeOutline}
      />
      <Heading as="h1" className="text-3xl font-bold mb-8">
        Exercise 3: Fixation Type 2 Exercise
      </Heading>
      <Card className="p-6 mb-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 overflow-x-auto">
            {/* Scrollable container for text */}
            <div className="flex space-x-2">{constructText()}</div>
          </div>
          {/* Play/Pause button */}
          <Button
            onClick={handlePlayPause}
            className="flex items-center space-x-2"
            variant="ghost"
            color="blue"
          >
            {isPlaying ? <IoPauseCircleOutline /> : <IoPlayCircleOutline />}
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </Button>
          {/* Badge and Settings button */}
          <div className="flex items-center space-x-2">
            <Badge color="gray">{currentIndex + 1}/{words.length}</Badge>
            <Button className="flex items-center space-x-1" variant="ghost" color="gray">
              <FiSettings />
              <span>Settings</span>
              <FiChevronRight />
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <Heading as="h2" className="text-xl font-bold mb-4">
          Settings
        </Heading>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <span>Speed:</span>
            <select
              value={speed}
              onChange={(e) => handleSpeedChange(parseInt(e.target.value))}
              className="border rounded p-2"
            >
              <option value={300}>Slow</option>
              <option value={200}>Medium</option>
              <option value={100}>Fast</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <span>Highlight Color:</span>
            <select
              value={highlightColor}
              onChange={(e) => handleColorChange(e.target.value)}
              className="border rounded p-2"
            >
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="purple">Purple</option>
            </select>
          </div>
          {/* Add additional settings components here */}
        </div>
      </Card>
    </div>
  );
}

export default FixationExercise;
