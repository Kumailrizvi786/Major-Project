import React, { useState, useEffect } from 'react';
import { Button, Card, Heading, Flex, Callout, TextField, Badge, Dialog } from '@radix-ui/themes';
import { IoPlayCircleOutline, IoPauseCircleOutline } from 'react-icons/io5';
import Breadcrumbs from '../../components/Breadcrumb';
import { IoHomeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { IoSettingsOutline } from 'react-icons/io5';
import './ExerciseOne.css'; // Import CSS file for animations
import { toast } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

function ExerciseOne() {
  const [exercise, setExercise] = useState([]);
  const [isReading, setIsReading] = useState(false);
  const [timer, setTimer] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [endReading, setEndReading] = useState(true);
  const [readingSpeed, setReadingSpeed] = useState(null);
  const [showReadingSpeedPopup, setShowReadingSpeedPopup] = useState(false);

  const location = useLocation();
  const { maxAge } = location.state;
  console.log(maxAge);

  const getExercisebyAge = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/exercise/getByAge/${maxAge}`);
      console.log(response.data);
      setExercise(response.data);
      toast.success('Exercise fetched successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    let interval;
    if (isReading) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setTimer(0);
    }
    return () => clearInterval(interval);
  }, [isReading]);

  useEffect(() => {
    getExercisebyAge();
  }, []);

  const handleStartReading = () => {
    toast.success('Reading started!');
    setIsReading(true);
    const card = document.getElementById('reading-card');
    card.classList.add('start-reading-animation');
  };

  const handleEndReading = () => {
    setIsReading(false);
    setEndReading(false);
    const card = document.getElementById('reading-card');
    card.classList.remove('start-reading-animation');
    calculateReadingSpeed();
  };

  const calculateReadingSpeed = () => {
    // Get the number of words (for simplicity, split by space)
    const words = exercise[0]?.content?.text.split(' ').length;
    // Calculate reading speed in words per minute (WPM)
    const readingSpeed = Math.round((words / (timer / 60)));
    setReadingSpeed(readingSpeed);
    setShowReadingSpeedPopup(true);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleSpeedChange = (e) => {
    setAnimationSpeed(parseFloat(e.target.value));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Exercise 1: ', href: '/general-exercise' },
        ]}
        icon={IoHomeOutline}
      />
      <Heading as="h1" className="text-3xl font-bold mb-4">
        Exercise 1: Exercise One
      </Heading>
      <Callout.Root>
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text>
          Read the text below and click the start button to start reading.
        </Callout.Text>
      </Callout.Root>
      <Card className="p-6 mt-2 mb-8 bg-gray-200" alignItems="center">
        <Flex gap="4" justify="center" alignItems="center" mb="4">
          <Button onClick={handleStartReading} className="mr-2">
            Start Reading <IoPlayCircleOutline />
          </Button>
          <Heading as="h2" className="text-xl font-bold mb-4">
            <Badge size={'3'} color="gray" variant="outline">
              Timer: {formatTime(timer)} Sec
            </Badge>
          </Heading>
        </Flex>
        <Card className="mb-8 w-48 mx-auto" id="reading-card">
          <p>{exercise[0]?.content?.text}</p>
        </Card>
        <Flex className="" gap="4" justify="center" alignItems="center" mb="4">
          <Button onClick={handleEndReading} className="mr-2" disabled={!endReading}>
            End Reading <IoPauseCircleOutline />
          </Button>
          <Link to="/comprehension" state={{ exercisedata: exercise[0] , readingSpeed: readingSpeed }}>
            <Button className="mr-2" disabled={endReading}>
              Next <FaRegArrowAltCircleRight />
            </Button>
          </Link>
        </Flex>
      </Card>
      <Dialog.Root open={showReadingSpeedPopup} onOpenChange={(open) => setShowReadingSpeedPopup(open)}>
        {/* <Dialog.Backdrop /> */}
     
        <Dialog.Content>
          <Card className="p-6 mt-4">
            <Heading as="h2" className="text-xl font-bold mb-4">
              Reading Speed
            </Heading>
            <p>Your reading speed is {readingSpeed} words per minute (WPM).</p>
            <Flex justify="center" mt="4">
              <Button onClick={() => setShowReadingSpeedPopup(false)}>Close</Button>
            </Flex>
          </Card>
        </Dialog.Content>
      </Dialog.Root>
      <Card className="p-6 mt-2 mb-8 bg-gray-200">
        <Heading as="h2" className="text-xl font-bold mb-4">
          <IoSettingsOutline className="inline mr-2" />
          Customize Settings
        </Heading>
        <Flex gap="4" alignItems="center">
          <label htmlFor="animationSpeed">Animation Speed:</label>
          <TextField.Root
            id="animationSpeed"
            type="number"
            value={animationSpeed}
            onChange={handleSpeedChange}
            min="0.1"
            max="10"
            step="0.1"
          />
        </Flex>
      </Card>
    </div>
  );
}

export default ExerciseOne;
