import React from 'react';
import {
  Badge,
  Box,
  Button,
  Card,
  Heading,
  IconButton,
  Popover,
  Flex,
  Avatar,
  TextArea,
  Checkbox,
    Link,
  Separator,
  Text,
} from '@radix-ui/themes';
import Breadcrumbs from '../components/Breadcrumb';
import {ChatBubbleIcon} from '@radix-ui/react-icons'
import { IoHomeOutline  } from 'react-icons/io5';

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
        <Popover.Root>
  <Popover.Trigger>
    <Button variant="soft">
      <ChatBubbleIcon width="16" height="16" />
      Comment
    </Button>
  </Popover.Trigger>
  <Popover.Content width="360px">
    <Flex gap="3">
      <Avatar
        size="2"
        src=""
        fallback="A"
        radius="full"
      />
      <Box flexGrow="1">
        <TextArea placeholder="Write a comment…" style={{ height: 80 }} />
        <Flex gap="3" mt="3" justify="between">
          <Flex align="center" gap="2" asChild>
            <Text as="label" size="2">
              <Checkbox />
              <Text>Send to group</Text>
            </Text>
          </Flex>

          <Popover.Close>
            <Button size="1">Comment</Button>
          </Popover.Close>
        </Flex>
      </Box>
    </Flex>
  </Popover.Content>
</Popover.Root>
      </Box>
    </div>
  );
}

export default Community;
