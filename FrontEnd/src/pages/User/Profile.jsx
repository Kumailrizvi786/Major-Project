import React, { useState } from 'react';
import { Badge, Heading,
  Callout, Dialog,Box,Card, Code,TextField,Text ,Grid,Inset ,Popover, DataList,SegmentedControl,Switch, Flex,Button, IconButton, Link, Separator, 
  Avatar} from '@radix-ui/themes';
import { CopyIcon } from '@radix-ui/react-icons';
import { FaEdit, FaLock, FaPen, FaReadme } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import { RiAwardLine, RiPassPendingLine, RiSpeedUpLine } from 'react-icons/ri';
import Breadcrumbs from '../../components/Breadcrumb';
import { IoHomeOutline, IoSpeedometer } from 'react-icons/io5';
import { getLoggedIn, getUserData } from '../../services/authService';
import { Navigate } from "react-router-dom";
import axios from "axios"
import {InfoCircledIcon} from '@radix-ui/react-icons'
import {Share2Icon, Link1Icon} from '@radix-ui/react-icons'
import api from '../../services/axiosConfig.js';
// import { TbMathAvg } from "react-icons/tb";
import { FaLevelUpAlt } from "react-icons/fa";
import { useEffect } from 'react';
import UserProgressChart from './UserProgressChart.jsx';
// import { getUser } from '../../Utils/helper';

function Profile() {
  const loggedIn = getLoggedIn();


const [userDetails, setUserDetails] = useState(null);
const [filterResults, setFilterResults] = useState(null);
const [loading, setLoading] = useState(true);

const usersalldata = async ()=>{
  console.log(user);
  // user data from this api /user/getAllDetails
 const response = await axios.post('http://localhost:8080/user/getAllDetails', {email: userEmail})
  console.log(response.data);
  setUserDetails(response.data);


}
const filterResultsByLevel = (event) => {
  const level = event.target.getAttribute('value'); // Extract the value attribute
 
 
  console.log('Filtering results by level:', level);
  if (level === 'inbox') {
    setFilterResults(userDetails?.result);
    toast.success('Filtered results by all levels');
  } else {
    const filteredResults = userDetails?.result.filter(result => result.exercise.difficulty.level === level);
    setFilterResults(filteredResults);
    toast.success(`Filtered results by ${level} level`);
  }
};



  useEffect(() => {
    if (!loggedIn) {
      return <Navigate to="/login" />;
     

    }
    usersalldata();

  }, []);


  const [OtpStatus , setOtpStatus] = useState("Sending OTP...");
  const [Otp, setOtp] = useState(null);
  const {user} = getUserData();
  const {userEmail, userName} = user;
  
  const results = userDetails?.result;



  // Breadcrumbs for navigation
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Profile', href: '/profile' },
  ];
  const testEmail = 'kumail.rizvi@blubooksolutions.com';
  const handleUserDetails = async () => {
    const response = await api.get('/user/getAllDetails', {email: testEmail})
    console.log(response.json());
  }

  const calculateAverageSpeed = (results) => {
    // Filter out null or undefined speed values
    const validSpeeds = results.filter(result => result.wpm !== null && result.wpm !== undefined);
    
    // Calculate total speed
    const totalSpeed = validSpeeds.reduce((acc, curr) => acc + curr.wpm, 0);
    
    // Calculate average speed
    const averageSpeed = validSpeeds.length > 0 ? totalSpeed / validSpeeds.length : 0;
  
    // Return the average speed rounded to two decimal places
    return averageSpeed.toFixed(2);
  };

  const calculateHighestSpeed = (results) => {
    // Filter out null or undefined speed values
    const validSpeeds = results.filter(result => result.wpm !== null && result.wpm !== undefined);
    
    // Sort the valid speeds in descending order
    const sortedSpeeds = validSpeeds.sort((a, b) => b.wpm - a.wpm);
    
    // Return the highest speed
    return sortedSpeeds.length > 0 ? sortedSpeeds[0].wpm : 0;
  };
  
  const calculateAverageLevel = (results) => {
    // Create a map to assign numerical values to difficulty levels
    const difficultyValues = {
      1: "Easy",
      2: "Medium",
      3: "Hard"
      // Add more difficulty levels as needed
    };
    
    // Extract all difficulty levels from results and convert them to numerical values
    const levels = results.map(result => {
      switch (result.exercise.difficulty.level) {
        case "Easy":
          return 1;
        case "Medium":
          return 2;
        case "Hard":
          return 3;
        // Add more cases if necessary
        default:
          return 0; // Default to 0 if difficulty level is not recognized
      }
    });
    
    // Calculate total levels
    const totalLevels = levels.length > 0 ? levels.reduce((acc, level) => acc + level, 0) : 0;
    
    // Calculate average level
    const averageLevel = levels.length > 0 ? totalLevels / levels.length : 0;
  
    // Return the corresponding difficulty level string based on the average numerical value
    return difficultyValues[Math.round(averageLevel)] || 'No data available';
  };
  
  
  
  return (
    <>
      {/* Profile for user to show their details */}
      <div className="container mx-auto px-4 py-8">
        <div className='ml-36'>
          <Breadcrumbs items={breadcrumbs} icon={IoHomeOutline} /> 
        </div>
        {/* <div className="flex items-center mt-4">
          
        <Heading as="h1" className="text-3xl font-bold ml-52">Profile</Heading>
        <p className="text-gray-500 mt-2 ml-52 mb-4">Your personal details and reading list</p>
        </div> */}
        {/* <Separator size="4" /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side */}
          <div>
            {/* Including profile pic */}
            <Flex justify="center">
              <Avatar alt="Profile" fallback={userName[0]} size={"9"} className="rounded-full h-40 w-40 object-cover object-center overflow-hidden" />
            </Flex>
            {/* Edit profile button */}
         
            <Flex justify="center" className="mt-4">
            <Dialog.Root>
  <Dialog.Trigger>
  <Button size="2" color="indigo" variant="soft" className='cursor-pointer'>
              <FiEdit />
    Edit profile
  </Button>
  </Dialog.Trigger>
  {/* <Button variant='outline' className='cursor-pointer' onClick={handleUserDetails}>Get User Details</Button> */}
  <Dialog.Content maxWidth="450px">
    <Dialog.Title>Edit profile</Dialog.Title>
    <Dialog.Description size="2" mb="4">
      Make changes to your profile.
    </Dialog.Description>

    <Flex direction="column" gap="3">
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Name
        </Text>
        <TextField.Root
          defaultValue={userName}
          placeholder="Enter your full name"
        />
      </label>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Email
        </Text>
        <TextField.Root
          defaultValue={userEmail}
          placeholder="Enter your email"
          disabled
        />
      </label>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Age
        </Text>
        <TextField.Root
          defaultValue="22"
          placeholder="Enter your age"
        />
      </label>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Location
        </Text>
        <TextField.Root
          defaultValue="Lucknow, India"
          placeholder="Enter your location"
        />
      </label>

    </Flex>

    <Flex gap="3" mt="4" justify="end">
      <Dialog.Close>
        <Button variant="soft" color="gray" className='cursor-pointer'>
          Cancel
        </Button>
      </Dialog.Close>
      <Dialog.Close>
        <Button variant='outline' className='cursor-pointer'>Save</Button>
      </Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>
            {/* </Flex>

           
            
            <Flex justify="center" className="mt-4"> */}
            <Popover.Root>
  <Popover.Trigger>
    <Button variant="soft">
      <Share2Icon width="16" height="16" />
      Share Profile
    </Button>
  </Popover.Trigger>
  <Popover.Content width="360px">
    <Grid columns="130px 1fr">
      <Inset side="left" pr="current">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?&auto=format&fit=crop&w=400&q=80"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </Inset>

      <div>
        <Heading size="2" mb="1">
          Share this Profile
        </Heading>
        <Text as="p" size="2" mb="4" color="gray">
          Minimalistic 3D rendering wallpaper.
        </Text>

        <Flex direction="column" align="stretch">
          <Popover.Close>
            <Button size="1" variant="soft">
              <Link1Icon width="16" height="16" />
              Copy link
            </Button>
          </Popover.Close>
        </Flex>
      </div>
    </Grid>
  </Popover.Content>
</Popover.Root>
            </Flex>

          </div>
       
          {/* Right side show all details like email, age, gender, city */}
          <div>
        
            <DataList.Root>
              <DataList.Item align="center">
                <DataList.Label minWidth="88px">Account Status</DataList.Label>
                <DataList.Value>
                <Flex align="center" gap="2">
                  {
                    userDetails?.isEmailVerified ?(<Badge color="jade" variant="soft" radius="full">
                    Authorized
                  </Badge>): <Badge color="plum" variant="soft" radius="full">
                    Not Authorized
                  </Badge>
                  }
                  
                 {/* verify now */}
                 { 
                  !userDetails?.isEmailVerified &&
                   <Dialog.Root>
  <Dialog.Trigger
  
  
  onClick={async () => {
    try {
        const response = await axios.post("http://localhost:8080/email/generateEmail", {
            email: userEmail
        });
        const data = response.data;
        if (data) {
            // Check if response indicates success
            toast.success("OTP Sent Successfully!");
            setOtpStatus("OTP Sent Successfully!"); // Update state to reflect OTP sent status
        } else {
            // Handle cases where response indicates failure
            toast.error("Failed to send OTP. Please try again.");
        }
    } catch (error) {
        // Handle network errors or other exceptions
        console.error("Error sending OTP:", error);
        toast.error("Failed to send OTP. Please try again.");
        setOtpStatus("Failed to send OTP. Please try again."); 
    }
}}

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  >
  <Button size='1' radius="full" color="cyan" className='cursor-pointer' variant="surface">
    Verify Now
  </Button>
  </Dialog.Trigger>

  <Dialog.Content maxWidth="450px">
    <Dialog.Title>Verify Your Email</Dialog.Title>
    <Dialog.Description size="2" mb="4">
      We have sent an OTP on your email.
       <Callout.Root  className='mt-2'>
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text>
       {OtpStatus}
        </Callout.Text> 
      </Callout.Root>
      
      
    </Dialog.Description>

    <Flex direction="column" gap="3">
      <label>
        <Text as="div" size="2" mb="1" weight="bold" >
          Enter OTP
        </Text>
        <TextField.Root
          // defaultValue="Freja Johnsen"
          onChange={(e)=>setOtp(e.target.value)}
          placeholder="Enter your OTP here"
          />
      </label>
    </Flex>

    <Flex gap="3" mt="4" justify="end">
      <Dialog.Close>
        <Button variant="soft" color="gray" className='cursor-pointer'>
          Cancel
        </Button>
      </Dialog.Close>
      <Dialog.Close>
        <Button variant='outline' className='cursor-pointer' onClick={async () => {
          console.log("otp",Otp)
            try {
                const response = await axios.post("http://localhost:8080/email/verifyEmail", {
                    email: userEmail,
                    otp: Otp
                });
                const data = response.data;
                console.log(data);
                if (data) {
                    // Check if response indicates success
                    toast.success("Email Verify Successfully!");
                    usersalldata();

                    // setOtpStatus("OTP Sent Successfully!"); // Update state to reflect OTP sent status
                } else {
                    // Handle cases where response indicates failure
                    toast.error("Failed to Verify email. Please try again.");
                }
            } catch (error) {
                // Handle network errors or other exceptions
                console.error("Error Verify email:", error);
                toast.error("Failed to Verify email. Please try again.");
                // setOtpStatus("Failed to send OTP. Please try again."); 
            }
        }}
        >Verify</Button>
      </Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>

        }
                </Flex>

                </DataList.Value>
              </DataList.Item>
              {/* <DataList.Item>
                <DataList.Label minWidth="88px">ID</DataList.Label>
                <DataList.Value>
                  <Flex align="center" gap="2">
                    <Code variant="ghost">u_2J89JSA4GJ</Code>
                    <IconButton
                      size="1"
                      aria-label="Copy value"
                      color="gray"
                      variant="ghost"
                    >
                      <CopyIcon />
                    </IconButton>
                  </Flex>
                </DataList.Value>
              </DataList.Item> */}
              <DataList.Item>
                <DataList.Label minWidth="88px">Name</DataList.Label>
                <DataList.Value>
                  <Flex align="center" gap="2">
                    {/* <UserIcon /> */}
                   {userName}
                  </Flex>
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px">Email</DataList.Label>
                <DataList.Value>
                  <Flex align="center" gap="2">
                    {/* <EmailIcon /> */}
                    <Link href={`mailto:${userEmail}`}>{userEmail}</Link>
                  </Flex>
                </DataList.Value>
              </DataList.Item>
              {/* 2FA switch on/off */}
              <DataList.Item>
                <DataList.Label minWidth="88px">2FA</DataList.Label>
                <DataList.Value>
                  <Flex align="center" gap="2">
                    <FaLock />
                    <Badge color="plum" variant="soft" radius="full">
                      off
                    </Badge>
                    {/* swich for on and off */}
                    {/* <Switch /> */}
                    <Switch onClick={()=>{toast.success("2FA Settings Saved Successfully!")}} />
                  </Flex>
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px">Age</DataList.Label>
                <DataList.Value>
                  <Flex align="center" gap="2">
                    {/* <UserIcon /> */}
                    Not Set
                  </Flex>
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px">Location</DataList.Label>
                <DataList.Value>
                  <Flex align="center" gap="2">
                    {/* <LocationIcon /> */}
                    Not Set
                  </Flex>
                </DataList.Value>
              </DataList.Item>
            </DataList.Root>
          </div>
        </div>
      </div>
      <Separator size="4" />
      <div className="flex justify-center items-center mt-4 mb-4">
      <Box maxWidth="1200px">
      <Flex gap="3" align="center">
        <Card>
          <Flex gap="3" align="center">
            <RiAwardLine size="32" />
            <Box>
  {(results && results.length > 0) ? (
    <>
      {results.map((result, index) => (
        <div key={index}>
          {/* Render individual scores */}
        </div>
      ))}
      <Text as="div" size="2" weight="bold">
        Total Score
      </Text>
      <Text as="div" size="2" color="gray">
        {results.reduce((acc, curr) => acc + curr.score, 0)} Points
      </Text>
    </>
  ) : (
    // Display score of 0 if results array is null or empty
    <>
      <Text as="div" size="2" weight="bold">
        Total Score
      </Text>
      <Text as="div" size="2" color="gray">
        0 Points
      </Text>
    </>
  )}
</Box>


          </Flex>
        </Card>
        <Card>
          <Flex gap="3" align="center">
            <FaReadme size="32" />
            <Box>
              <Text as="div" size="2" weight="bold">
                Total Reading
              </Text>
              <Text as="div" size="2" color="gray">
               { results?.length || 0} Exercise
              </Text>
            </Box>
          </Flex>
        </Card>
        <Card>
          <Flex gap="3" align="center">
            <IoSpeedometer size="32" />
            <Box>
  <Text as="div" size="2" weight="bold">
    Avg Speed
  </Text>
  {/* Logic for calculating average speed */}
  <Text as="div" size="2" color="gray">
    {results && results.length > 0 ? `${calculateAverageSpeed(results)} w/m` : 'No data available'}
  </Text>
</Box>

          </Flex>
        </Card>
       
        <Card>
          <Flex gap="3" align="center">
            <RiSpeedUpLine size="32" />
            <Box>
  <Text as="div" size="2" weight="bold">
    Highest Speed
  </Text>
  {/* Logic for calculating highest speed */}
  <Text as="div" size="2" color="gray">
    {results && results.length > 0 ? `${calculateHighestSpeed(results)} w/m` : 'No data available'}
  </Text>
</Box>

          </Flex>
        </Card>
        <Card>
          <Flex gap="3" align="center">
          <FaLevelUpAlt   size="32" />
          <Box>
  <Text as="div" size="2" weight="bold">
    Average Level
  </Text>
  {/* Logic for calculating average level */}
  <Text as="div" size="2" color="gray">
    {results && results.length > 0 ? calculateAverageLevel(results) : 'No data available'}
  </Text>
</Box>

          </Flex>
        </Card>
      </Flex>
    </Box>
      </div>
      <Separator size="4" />

      <div className="container mx-auto px-32 py-8">
        <Heading as="h2" className="text-2xl font-bold">Progress Chart</Heading>
        <p className="text-gray-500 mt-2 mb-2">Your reading progress over time</p>
        <Callout.Root>
            <Callout.Icon>
              <RiPassPendingLine />
            </Callout.Icon>
            <Callout.Text>
             Note: Scoring 0 points is considered as a incomplete sessions.
            </Callout.Text>
          </Callout.Root>
        {/* <div className="mt-8"> */}
        { userDetails && <UserProgressChart userDetails={userDetails}  />}
        {/* </div> */}
      </div>
      <Separator size="4" />

      {/* Reading list */}
      <div className="container mx-auto px-32 py-8">

        <Heading as="h2" className="text-2xl font-bold">Exercise Reading List</Heading>
        <p className="text-gray-500 mt-2">List of all your reading sessions</p>
        <div className="flex justify-center">
        {/* including segmented control */}



        <SegmentedControl.Root defaultValue="inbox" onClick={filterResultsByLevel}>
  <SegmentedControl.Item value="inbox">All</SegmentedControl.Item>
  <SegmentedControl.Item value="Medium">Medium</SegmentedControl.Item>
  <SegmentedControl.Item value="Hard">Hard</SegmentedControl.Item>
</SegmentedControl.Root>
        </div>
        <div className="mt-4">
          { results?.length === 0 && 
          <Card>
            <p className="text-gray-500 text-center">No reading sessions found</p> 
            </Card>
            }
          { 

          
          results?.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center">
                <Heading as="h3" className="text-lg font-semibold ">{item.exercise.name}</Heading>
                <span className="text-gray-500"> Level: <Badge color={"plum"} variant="soft" radius="full"> {item.exercise.difficulty.level} </Badge></span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-500">Avg Speed: {item.wpm}</span>
                <span className="text-gray-500">Score: {item.score}</span>
              </div>
              <div className="mt-2 text-gray-500">Exercise:  {item.exercise.description}
{/* </Badge> */}

              </div>
            </div>
          ))}
        </div>
         {/* callout  */}
        <Separator size="4" className='my-4' />
          
        {/* </div> */}
        {/* chart here */}

       
      </div>
    </>
  );
}

export default Profile;
