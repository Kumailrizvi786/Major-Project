import React, { useState, useEffect, useRef } from 'react';
import { IoPlay, IoPause } from 'react-icons/io5';
import { Button, Heading } from '@radix-ui/themes';
import { Box, TextArea } from '@radix-ui/themes';
import { useNavigate } from 'react-router-dom';

function SpeedReadingPage({ content, filteredExercises }) {
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1); // Default speed
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [contentWords, setContentWords] = useState([]);
  const [textComplete, setTextComplete] = useState(false);
  const navigate = useNavigate();
  const [startTime, setStartTime] = useState(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (content) {
      setContentWords(content.split(' '));
    }
  }, [content]);

  const handlePlayPause = () => {
    if (!playing) {
      setStartTime(Date.now());
    } else {
      clearInterval(intervalRef.current);
      setTextComplete(true); // Text is complete
    }
    setPlaying(!playing);
  };

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
  };

  const handleReplay = () => {
    setCurrentWordIndex(0);
    setPlaying(false);
    setTextComplete(false);
    setStartTime(null); // Reset start time
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setCurrentWordIndex((prevIndex) => {
          if (prevIndex < contentWords.length - 1) {
            return prevIndex + 1;
          } else {
            clearInterval(intervalRef.current);
            setPlaying(false);
            setTextComplete(true); // Text is complete
            return prevIndex;
          }
        });
      }, 60000 / (speed * 300)); // Calculate interval based on speed
    }

    return () => clearInterval(intervalRef.current);
  }, [playing, speed, contentWords]);

  const calculateReadingSpeed = () => {
    if (startTime !== null) {
      const totalTime = (Date.now() - startTime) / 1000; // Convert to seconds
      const wordsRead = currentWordIndex;
      return Math.round((wordsRead / totalTime) * 60); // Calculate words per minute (wpm)
    }
    return 0; // If start time is null, reading speed is 0
  };

  const handleNext = () => {
    // Navigate to the comprehension page
    navigate('/comprehension', { state: { exercisedata: filteredExercises[0], readingSpeed: calculateReadingSpeed() } });
  };

  const handleAnother = () => {
    // Navigate to the exercise page
    navigate('/general-exercise');
  }
  return (
    <Box css={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box className='text-center'>
        <Heading size="2" className="text-4xl border border-gray-300 rounded-md p-12">
          {contentWords[currentWordIndex]}
        </Heading>
      </Box>
      <Box className='text-center mt-2'>
        <Button
          onClick={handlePlayPause}
          className={`inline-flex items-center justify-center px-4 py-2 mr-2 rounded-md focus:outline-none ${
            playing ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
          }`}
        >
          {playing ? <IoPause /> : <IoPlay />}
          <span className="ml-2">{playing ? 'Pause' : 'Play'}</span>
        </Button>
        <Button
          onClick={() => handleSpeedChange(speed * 0.5)}
          className="inline-flex items-center justify-center px-4 py-2 mr-2 rounded-md bg-blue-500 text-white focus:outline-none"
        >
          0.5x
        </Button>
        <Button
          onClick={() => handleSpeedChange(speed * 2)}
          className="inline-flex items-center justify-center px-4 py-2 mr-2 rounded-md bg-blue-500 text-white focus:outline-none"
        >
          2x
        </Button>
        <Button
          onClick={() => handleSpeedChange(speed * 3)}
          className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-blue-500 text-white focus:outline-none"
        >
          3x
        </Button>
        <Button
          onClick={handleReplay}
          className="inline-flex items-center justify-center px-4 py-2 ml-2 rounded-md bg-gray-500 text-white focus:outline-none"
        >
          Replay
        </Button>
        {filteredExercises && textComplete && (
          <Button
            onClick={handleNext}
            className="inline-flex items-center justify-center px-4 py-2 ml-2 rounded-md bg-blue-500 text-white focus:outline-none"
          >
            Next
          </Button>
        )}
        {!filteredExercises && textComplete && (
          <Button
            onClick={handleAnother}
            className="inline-flex items-center justify-center px-4 py-2 ml-2 rounded-md bg-blue-500 text-white focus:outline-none"
          >
            Practice Compelete - Try Another Exercise
          </Button>
        )}
      </Box>
      <Box className='text-center mt-2'>
        <Heading size="3" className="text-lg">
          Reading Speed: {calculateReadingSpeed()} words per minute
        </Heading>
      </Box>
    </Box>
  );
}

export default SpeedReadingPage;
