
import React, { useEffect, useState } from 'react';
import { Button, Card, Heading, Flex, Badge, Callout } from '@radix-ui/themes';
import Breadcrumbs from '../../components/Breadcrumb';
import { IoHomeOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { FaSave } from 'react-icons/fa';
import axios from 'axios';
import ConfettiExplosion from 'react-confetti-explosion';
import { MdSportsScore } from "react-icons/md";
import { IoSpeedometer } from "react-icons/io5";
import { getUserData } from '../../services/authService';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import { toast } from 'react-hot-toast';

function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  console.log('State:', state);
  // const [userId, setUserId] = useState(null);
  const userdata = getUserData();
  const percentageCorrect = state?.percentageCorrect;
  const readingSpeed = state?.readingSpeed;
  const exercisedata = state?.exercisedata;

  const userEmail = userdata?.user?.userEmail;
  // setUserId(userdata?.user?.userEmail);
  // cons
  const usersalldata = async ()=>{
    // console.log(user);
    // user data from this api /user/getAllDetails
   const response = await axios.post('http://localhost:8080/user/getAllDetails', {email: userEmail})
    console.log(response.data);
    setUserDetails(response.data);
  
  
  }
 useEffect(()=>{

  usersalldata();
  },[])


    const userId = userDetails?._id;


    console.log('User ID:', userDetails);



  const speed = readingSpeed;
  const comprehensionPercentage = percentageCorrect;

  // Calculate score based on comprehension percentage and reading speed
  const calculateScore = () => {
    // Professional formula to calculate score
    const score = Math.round((speed * comprehensionPercentage) / 100);
    return score;
  
  };

  const score = calculateScore();

  const handleResult = async (userId) => {
    
    // Save the result to the database
    // need userId, exerciseId, score, wpm 
    try {
   
      const exercise = exercisedata._id;
      const response = await axios.post('http://localhost:8080/user/result/create', {
        userId: userId,
        exerciseId: exercise,
        score: score,
        wpm: speed,
      });
      console.log(response.data);
      // Show a success message
      toast.success('Result saved successfully!');
      // Redirect to the home page
      navigate('/general-exercise');
      
    } catch (error) {
      console.error(error);
      // Show an error message
      toast.error('An error occurred while saving the result. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Exercise 1', href: '/general-exercise' },
          { label: 'Result' },
        ]}
        icon={IoHomeOutline}
      />
      <Heading as="h1" className="text-3xl font-bold mb-8">
        Result
      </Heading>
        <Callout.Root className="mb-4">
          <Callout.Icon>
            <IoSpeedometer className="text-2xl" />
          </Callout.Icon>
          <Callout.Text>
  
              Your reading speed is the number of words you can read in a minute. The average adult reading speed is 200-250 words per minute.
        
          </Callout.Text>
        </Callout.Root>
       
      <Card className="p-6 mb-8">
        {speed >= 100 && <ConfettiExplosion numberOfPieces={200} duration={5400} force={0.8} width={1600}/>}
        <Heading as="h2" className="text-xl font-bold mb-4">
         Your Score <MdSportsScore className='inline' /> : <span className="text-green-500">+{score} Score Points</span> 
        </Heading>
        <Flex direction="column" gap="2" className="mb-4">
          <Heading as="h3" className="text-lg font-bold">
            Reading Speed : {speed} WPM (words per minute)
          </Heading>
          <Heading as="h3" className="text-lg font-bold">
            Comprehension Percentage: <Badge size={"3"}> {comprehensionPercentage}% </Badge>
          </Heading>
        </Flex>
        {/* Display ConfettiExplosion if the user has completed the exercise */}
      </Card>

      {/* Navigation buttons */}
      <Flex gap="4" justify="center" alignItems="center">
        <Link to="/" className="flex items-center">
          <Button className="mr-2">
            <IoHomeOutline className="mr-1" /> Home
          </Button>
        </Link>
        <Button onClick={() => handleResult(userId)}>
  <FaSave className="mr-1" /> Save Result & Continue
</Button>
      </Flex>
    </div>
  );
}

export default Result;
