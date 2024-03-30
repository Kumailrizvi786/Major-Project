import React from 'react';
import Tables from '../components/Tables';
import { SegmentedControl } from '@radix-ui/themes';
import { Box, Card, Flex, Avatar, Text } from '@radix-ui/themes';
import { RiAwardLine } from 'react-icons/ri';
import { FaTrophy } from 'react-icons/fa';
import Breadcrumbs from '../components/Breadcrumb';
import { IoHomeOutline } from 'react-icons/io5';
import { getLoggedIn } from '../services/authService';
import {toast} from 'react-hot-toast'
import {Navigate} from 'react-router-dom'



function LeaderboardList() {
   const loggedIn = getLoggedIn()
    
   if(!loggedIn){
    toast.error("Please Login to get Access!")
    return <Navigate to="/login"/>
   }

  const data = [
    { rank: 1, name: 'Mohd Maaz', speed: '250 w/m' },
    { rank: 2, name: 'Syed Kumail Rizvi', speed: '248 w/m' },
    { rank: 3, name: 'Sahil Ali', speed: '238 w/m' },
    { rank: 4, name: 'Lucky Ali', speed: '235 w/m' },
    { rank: 5, name: 'Ayesha Siddiqua', speed: '230 w/m' },
    { rank: 6, name: 'Sana Fatima', speed: '225 w/m' },
    { rank: 7, name: 'Zeba Shaikh', speed: '220 w/m' },
    { rank: 8, name: 'Mohd Owais', speed: '215 w/m' },
    { rank: 9, name: 'Mohd Zaid', speed: '210 w/m' },
    { rank: 10, name: 'Mohd Abdullah', speed: '205 w/m' },
  ]
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Leaderboard', href: '/leaderboard' },
  ];
  
  return (

    <div className="mt-4">
      <div className='ml-28'>
         <Breadcrumbs items={breadcrumbs} icon={IoHomeOutline} /> 
      </div>
      {/* including filtters */}
      <div className="flex justify-center items-center mt-4">
      <Box maxWidth="700px">
      <Flex gap="1" align="center">
        <Card>
          <Flex gap="3" align="center">
            <RiAwardLine size="32" />
            <Box>
              <Text as="div" size="2" weight="bold">
                My Score
              </Text>
              <Text as="div" size="2" color="gray">
                500
              </Text>
            </Box>
          </Flex>
        </Card>
        <Card>
          <Flex gap="3" align="center">
            <FaTrophy size="32" />
            <Box>
              <Text as="div" size="2" weight="bold">
                Latest High Score
              </Text>
              <Text as="div" size="2" color="gray">
                1000
              </Text>
            </Box>
          </Flex>
        </Card>
        <Card>
          <Flex gap="3" align="center">
            <FaTrophy size="32" />
            <Box>
              <Text as="div" size="2" weight="bold">
                Competition
              </Text>
              <Text as="div" size="2" color="gray">
                1st Place
              </Text>
            </Box>
          </Flex>
        </Card>
        <Card>
          <Flex gap="3" align="center">
            <FaTrophy size="32" />
            <Box>
              <Text as="div" size="2" weight="bold">
                One More Card
              </Text>
              <Text as="div" size="2" color="gray">
                1st Place
              </Text>
            </Box>
          </Flex>
        </Card>
      </Flex>
    </Box>
      </div>
      {/* including search bar */}
      <div className="flex justify-center items-center mt-4">
      <SegmentedControl.Root defaultValue="inbox">
  <SegmentedControl.Item value="today">Today</SegmentedControl.Item>
  <SegmentedControl.Item value="drafts">This Week</SegmentedControl.Item>
  <SegmentedControl.Item value="inbox">This Month</SegmentedControl.Item>
  <SegmentedControl.Item value="year">This Year</SegmentedControl.Item>
</SegmentedControl.Root>
      </div>
    <Tables />
    </div>
  );
}

export default LeaderboardList;
