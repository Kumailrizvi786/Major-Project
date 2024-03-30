import React from 'react';
import {
  Badge,
  Box,
  Button,
  Card,
  Heading,
  IconButton,
  Link,
  Separator,
  Text,
} from '@radix-ui/themes';
import Breadcrumbs from '../components/Breadcrumb';
import { IoHomeOutline } from 'react-icons/io5';

function Community() {
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Community', href: '/community' },
    ];


  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbs} icon={IoHomeOutline} />
      <Heading as="h1" className="text-3xl font-bold mb-8">
        Community
      </Heading>

      <Card className="mb-8 p-6">
        <Heading as="h2" className="text-xl font-semibold mb-4">
          Welcome to the Speed Reading Community!
        </Heading>
        <Text>
          Enhance your reading skills, share experiences, and connect with fellow speed readers in our vibrant community.
        </Text>
      </Card>

      <Separator size="large" />

      <Box className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <Card>
          <Heading as="h2" className="text-xl font-semibold mb-4">
            Upcoming Events
          </Heading>
          <ul>
            <li className="mb-2">
              <Link href="#" className="text-blue-500 hover:underline">
                Speed Reading Workshop
              </Link>{' '}
              - May 15th, 2024
            </li>
            <li className="mb-2">
              <Link href="#" className="text-blue-500 hover:underline">
                Book Discussion: "The Power of Habit"
              </Link>{' '}
              - June 10th, 2024
            </li>
            {/* Add more events here */}
          </ul>
        </Card>

        <Card>
          <Heading as="h2" className="text-xl font-semibold mb-4">
            Latest Posts
          </Heading>
          <ul>
            <li className="mb-2">
              <Link href="#" className="text-blue-500 hover:underline">
                Tips for Improving Reading Speed
              </Link>{' '}
              <Badge color="blue" className="ml-2">
                New
              </Badge>
            </li>
            <li className="mb-2">
              <Link href="#" className="text-blue-500 hover:underline">
                My Journey to Doubling Reading Speed
              </Link>
            </li>
            {/* Add more posts here */}
          </ul>
        </Card>
      </Box>

      <Separator size="large" />

      <Box className="flex justify-center mt-8">
        <Button size="large" variant="outline">
          Join Our Speed Reading Community
        </Button>
      </Box>
    </div>
  );
}

export default Community;
