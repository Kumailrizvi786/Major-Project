import React, { useState, useEffect } from 'react';
import { Button, Card, Heading, Flex, Callout, TextField,Badge } from '@radix-ui/themes';
import { IoPlayCircleOutline, IoPauseCircleOutline } from 'react-icons/io5';
import Breadcrumbs from '../../components/Breadcrumb';
import { IoHomeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { IoSettingsOutline } from "react-icons/io5";
import './ExerciseOne.css'; // Import CSS file for animations
import { toast } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function ExerciseOne() {
    const [exercise, setExercise] = useState([]);
    // const [exerciseRandom, setExerciseRandom] = useState([]);
    const location  = useLocation()
    const  {maxAge}  = location.state;
    console.log(maxAge)

    const getExercisebyAge = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/exercise/getByAge/${maxAge}`);
            console.log(response.data);
            setExercise(response.data);
            toast.success('Exercise fetched successfully!');
            // chooseRandomExercise();
        } catch (error) {
            console.error(error);
        }
    };
    

  const [isReading, setIsReading] = useState(false);
  const [timer, setTimer] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(1); // Initial animation speed

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

    // const chooseRandomExercise = () => {
    //     // if (exercise.length === 0) {
    //     //   // Handle case where there are no exercises
    //     //   console.log("No exercises available.");
    //     //   return;
    //     // }
      
    //     // Choose a random index less than the length of the exercise array
    //     console.log("exercise.length", exercise.length);
    //     const randomIndex = Math.floor(Math.random() * (exercise.length));
    //     const randomExercise = exercise[0];
    //     console.log("randomIndex", randomIndex);
      
    //     console.log("chooseRandomExercise", randomExercise);
    //     // Use or set the selected random exercise state as needed
    //     setExerciseRandom(randomExercise);
    //   };
      

  const handleStartReading = () => {
    toast.success('Reading started!');
    setIsReading(true);
    // Smooth scroll down animation
    const card = document.getElementById('reading-card');
    card.classList.add('start-reading-animation'); // Add CSS class for animation
  };

  const handleEndReading = () => {
    setIsReading(false);
    // Remove animation class after reading ends
    const card = document.getElementById('reading-card');
    card.classList.remove('start-reading-animation');
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
            <Badge size={"3"} color='gray' variant='outline'>
            Timer: {formatTime(timer)} Sec
            </Badge> 
          </Heading>
        </Flex>
        <Card className="mb-8 w-48 mx-auto" id="reading-card">
          <p>
            {exercise[0]?.content?.text}         
          </p>
          
        </Card>
        <Flex className="mr-40" gap="4" justify="center" alignItems="center" mb="4">
          <Link to="/comprehension" state={{ exercisedata: exercise[0] }}>
            <Button onClick={handleEndReading} className="mr-2">
              End Reading <IoPauseCircleOutline />
            </Button>
          </Link>
        </Flex>
      </Card>
      {/* Settings section */}
      <Card className="p-6 mt-2 mb-8 bg-gray-200">
        <Heading as="h2" className="text-xl font-bold mb-4">
        <IoSettingsOutline className='inline mr-2' />
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
