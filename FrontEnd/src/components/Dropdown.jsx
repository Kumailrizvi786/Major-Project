import React from 'react';
import { DropdownMenu, Link,Avatar } from '@radix-ui/themes';

function Dropdown() {
  return (
    <DropdownMenu.Root>
      {/* Trigger the dropdown when Avatar is clicked */}
      <DropdownMenu.Trigger>
        {/* Avatar wrapped with Link */}
        <Link href="#" color="gray">
          {/* Replace Avatar with your Avatar component */}
          <Avatar
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="A"
            radius="full"
            onClick={(e) => e.preventDefault()} // Prevent default click action
          />
        </Link>
      </DropdownMenu.Trigger>
      {/* Dropdown Content */}
      <DropdownMenu.Content variant="soft">
        <DropdownMenu.Item shortcut="⌘ P">Profile</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="⌘ E">Exercise</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item shortcut="⌘ R">Result</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
          Logout
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default Dropdown;
