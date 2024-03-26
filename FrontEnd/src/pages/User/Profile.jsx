import React from 'react';
import { Badge, Code, DataList,SegmentedControl,Switch, Flex,Button, IconButton, Link, Separator } from '@radix-ui/themes';
import { CopyIcon } from '@radix-ui/react-icons';
import { FaEdit, FaLock, FaPen } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

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

  return (
    <>
      {/* Profile for user to show their details */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side */}
          <div>
            {/* Including profile pic */}
            <Flex justify="center">
              <img src="../../../img/sahil.jpg" alt="Profile" className="rounded-full h-40 w-40 object-cover object-center overflow-hidden" />
            </Flex>
            {/* Edit profile button */}
            <Flex justify="center" className="mt-4">
              <Link href="#" color="gray">
              <Button size="2" color="indigo" variant="soft">
              <FiEdit />
    Edit profile
  </Button>
              </Link>
            </Flex>
          </div>

          {/* Right side show all details like email, age, gender, city */}
          <div>
            <DataList.Root>
              <DataList.Item align="center">
                <DataList.Label minWidth="88px">Status</DataList.Label>
                <DataList.Value>
                  <Badge color="jade" variant="soft" radius="full">
                    Authorized
                  </Badge>
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
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
              </DataList.Item>
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
                    <Switch />
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

      {/* Reading list */}
      <div className="container mx-auto px-32 py-8">
        <h2 className="text-2xl font-bold text-gray-800">Reading List</h2>
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
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
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
