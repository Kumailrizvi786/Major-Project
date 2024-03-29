import React from 'react';
import { Badge, Heading,Dialog,Box,Card, Code,TextField,Text , DataList,SegmentedControl,Switch, Flex,Button, IconButton, Link, Separator } from '@radix-ui/themes';
import { CopyIcon } from '@radix-ui/react-icons';
import { FaEdit, FaLock, FaPen, FaReadme } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import { RiAwardLine, RiPassPendingLine, RiSpeedUpLine } from 'react-icons/ri';
import { FaTrophy } from 'react-icons/fa';
import Breadcrumbs from '../../components/Breadcrumb';
import { IoHomeOutline, IoSpeedometer } from 'react-icons/io5';

// import
function Profile() {
  // Data for reading list with date, title, avgSpeed, exercise status, and duration
  const data = [
    {
      id: 1,
      date: '2021-08-01',
      title: 'Reading with Sahil',
      avgSpeed: '52 w/m',
      status: 'Completed',
      duration: '1h 20m',
    },
    {
      id: 2,
      date: '2021-08-02',
      title: 'Story of my life',
      avgSpeed: '124 w/m',
      status: 'Pending',
      duration: '2h 10m',
    },
    {
      id: 3,
      date: '2021-08-03',
      title: 'History of india',
      avgSpeed: '31 w/m',
      status: 'Completed',
      duration: '45m',
    },
    {
      id: 4,
      date: '2021-08-04',
      title: 'Science and technology',
      avgSpeed: '52 w/m',
      status: 'Completed',
      duration: '1h 20m',
    },
    {
      id: 5,
      date: '2021-08-05',
      title: 'Evening Ride',
      avgSpeed: '124 w/m',
      status: 'Completed',
      duration: '2h 10m',
    },
    {
      id: 6,
      date: '2021-08-06',
      title: 'One more story',
      avgSpeed: '31 w/m',
      status: 'Completed',
      duration: '45m',
    },
  ];
  // Breadcrumbs for navigation
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Profile', href: '/profile' },
  ];

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
              <img src="../../../img/sahil.jpg" alt="Profile" className="rounded-full h-40 w-40 object-cover object-center overflow-hidden" />
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
          defaultValue="Sahil ali"
          placeholder="Enter your full name"
        />
      </label>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Email
        </Text>
        <TextField.Root
          defaultValue="sahilali88084667@gmail.com"
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
            </Flex>
          </div>
       
          {/* Right side show all details like email, age, gender, city */}
          <div>
        
            <DataList.Root>
              <DataList.Item align="center">
                <DataList.Label minWidth="88px">Account Status</DataList.Label>
                <DataList.Value>
                <Flex align="center" gap="2">
                  <Badge color="plum" variant="soft" radius="full">
                    Not Authorized
                  </Badge>
                 {/* verify now */}
                 <Dialog.Root>
  <Dialog.Trigger onClick={()=>{toast.success("OTP Sent SuccessFully!")}}>
  <Button size='1' radius="full" color="cyan" className='cursor-pointer' variant="surface">
    Verify Now
  </Button>
  </Dialog.Trigger>

  <Dialog.Content maxWidth="450px">
    <Dialog.Title>Verify Your Email</Dialog.Title>
    <Dialog.Description size="2" mb="4">
      We have sent an OTP on your email.
    </Dialog.Description>

    <Flex direction="column" gap="3">
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Enter OTP
        </Text>
        <TextField.Root
          // defaultValue="Freja Johnsen"
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
        <Button variant='outline' className='cursor-pointer'>Verify</Button>
      </Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>

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
                    Sahil Ali
                  </Flex>
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px">Email</DataList.Label>
                <DataList.Value>
                  <Flex align="center" gap="2">
                    {/* <EmailIcon /> */}
                    <Link href="mailto:sahil88084667@gmail.com">sahil88084667@gmail.com</Link>
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
                    22 , Male
                  </Flex>
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px">Location</DataList.Label>
                <DataList.Value>
                  <Flex align="center" gap="2">
                    {/* <LocationIcon /> */}
                    Lucknow, India
                  </Flex>
                </DataList.Value>
              </DataList.Item>
            </DataList.Root>
          </div>
        </div>
      </div>
      <Separator size="4" />
      <div className="flex justify-center items-center mt-4 mb-4">
      <Box maxWidth="700px">
      <Flex gap="3" align="center">
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
            <FaReadme size="32" />
            <Box>
              <Text as="div" size="2" weight="bold">
                Total Reading
              </Text>
              <Text as="div" size="2" color="gray">
                1000
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
              <Text as="div" size="2" color="gray">
                200 w/m
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
              <Text as="div" size="2" color="gray">
                150 w/m
              </Text>
            </Box>
          </Flex>
        </Card>
      </Flex>
    </Box>
      </div>
      <Separator size="4" />

      {/* Reading list */}
      <div className="container mx-auto px-32 py-8">
        <Heading as="h2" className="text-2xl font-bold">Reading List</Heading>
        <p className="text-gray-500 mt-2">List of all your reading sessions</p>
        <div className="flex justify-center">
        {/* including segmented control */}

         {/* <div className="flex justify-center mt-4">
          <div className="flex items-center space-x-4">
            <button className="text-blue-500">All</button>
            <button className="text-gray-500">Completed</button>
            <button className="text-gray-500">Pending</button>
          </div>
        </div> */}
        <SegmentedControl.Root defaultValue="inbox">
  <SegmentedControl.Item value="inbox">All</SegmentedControl.Item>
  <SegmentedControl.Item value="drafts">Completed</SegmentedControl.Item>
  <SegmentedControl.Item value="sent">Pending</SegmentedControl.Item>
</SegmentedControl.Root>
        </div>
        <div className="mt-4">
          {data.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center">
                <Heading as="h3" className="text-lg font-semibold ">{item.title}</Heading>
                <span className="text-gray-500">{item.date}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-500">Avg Speed: {item.avgSpeed}</span>
                <span className="text-gray-500">Duration: {item.duration}</span>
              </div>
              <div className="mt-2">
              <Badge color={item.status === "Pending" ? "plum" : "jade"} variant="soft" radius="full">
  {item.status}
</Badge>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Profile;
