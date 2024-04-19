import React, { useState, useEffect } from 'react';
import { Badge, Button, Card, Heading, Text } from '@radix-ui/themes';
import { IoPlayCircleOutline, IoPauseCircleOutline } from 'react-icons/io5';
import { FiChevronRight, FiSettings } from 'react-icons/fi';

function FixationExercise() {
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(300); // Default speed in milliseconds
  const [highlightColor, setHighlightColor] = useState('green'); // Default highlight color

  // Sample text for demonstration
  const sampleText = `This is a sample text for fixation exercise. It contains multiple words and phrases.`;

  // Split the text into words
  useEffect(() => {
    setWords(sampleText.split(' '));
  }, []);

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
  }, [isPlaying, currentIndex]);

  // Construct the text with highlighted current word
  const constructText = () => {
    return words.map((word, index) => {
      if (index === currentIndex) {
        return (
          <Text key={index} className={`bg-${highlightColor}-100 rounded p-1`}>
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
      <Heading as="h1" className="text-3xl font-bold mb-8">
        Fixation Exercise
      </Heading>
      <Card className="p-6 mb-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {constructText()}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              onClick={handlePlayPause}
              className="flex items-center space-x-2"
              variant="ghost"
              color="blue"
            >
              {isPlaying ? <IoPauseCircleOutline /> : <IoPlayCircleOutline />}
              <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </Button>
            <div className="flex items-center space-x-2">
              <Badge color="gray">{currentIndex + 1}/{words.length}</Badge>
              <Button className="flex items-center space-x-1" variant="ghost" color="gray">
                <FiSettings />
                <span>Settings</span>
                <FiChevronRight />
              </Button>
            </div>
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
