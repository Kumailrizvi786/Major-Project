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

  const intervalRef = useRef(null);

  useEffect(() => {
    if (content) {
      setContentWords(content.split(' '));
    }
  }, [content]);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleSpeedChange = (newSpeed) => {
    setSpeed(newSpeed);
  };

  const handleReplay = () => {
    setCurrentWordIndex(0);
    setPlaying(false);
    setTextComplete(false);
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
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [playing, speed, contentWords]);

  const handleNext = () => {
    // Navigate to the comprehension page
    navigate('/comprehension', { state: { exercisedata:filteredExercises[0]  } });
  };

  return (
    <Box css={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box className='text-center'>
      <Heading size="2" className="text-4xl border border-gray-300 rounded-md p-12">
          {contentWords[currentWordIndex]}
        </Heading>
        {/* <TextArea value={contentWords[currentWordIndex]} className="mt-4" readOnly /> */}
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
        {textComplete && (
          <Button
            onClick={handleNext}
            className="inline-flex items-center justify-center px-4 py-2 ml-2 rounded-md bg-blue-500 text-white focus:outline-none"
          >
            Next
          </Button>
        )}
        {/* Add more speed options */}
      </Box>
    </Box>
  );
}

export default SpeedReadingPage;
