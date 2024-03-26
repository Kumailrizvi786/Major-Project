import React from 'react'
import  {Container, Box,Link,DropdownMenu, Section,Avatar,IconButton,Tooltip, Heading,Button} from '@radix-ui/themes';
import {SunIcon, MagnifyingGlassIcon} from '@radix-ui/react-icons';
import Dropdown from './Dropdown';
function Nav({ onThemeChange }) {
  return (
    <div>
   <Box style={{ background: 'var(--gray-a2)',boxShadow:'var(--shadow-5)', borderRadius: 'var(--radius-3)' }}>
  <Container size="7" py="4">
  <div className="flex justify-between items-center">
    {/* <Section></Section> */}
    {/* <div> */}
  <Heading align="left" as="div">ReadForSpeed</Heading>
    {/* </div> */}
  <nav className="flex justify-center space-x-2">
        <Link href="/" color="gray">Home</Link>
        <Link href="/explore" color="gray">Explore</Link>
        <DropdownMenu.Root>
    <DropdownMenu.Trigger>
      {/* inline icon and link */}
      <div className="flex items-center space-x-1">
    <Link href="/practice" color="gray">
      Pratice
        {/* <DropdownMenu.TriggerIcon /> */}
        </Link>
      </div>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content variant="soft">
      <DropdownMenu.Item shortcut="⌘ I">Instruction</DropdownMenu.Item>
      <DropdownMenu.Item shortcut="⌘ E">Exercise</DropdownMenu.Item>
      <DropdownMenu.Separator />
      <DropdownMenu.Item shortcut="⌘ R">Result</DropdownMenu.Item>

      <DropdownMenu.Separator />
      <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
        Delete
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
  <Link href="#" color="gray">Leaderboard</Link>
        <Link href="#" color="gray">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4 mr-4">
        <Tooltip content="Change theme">
          <IconButton size="1" variant="ghost">
          <SunIcon height="18" width="18" color="gray" variant="outline" onClick={onThemeChange}/>
       
        </IconButton>
          </Tooltip>
         <Button color="gray" variant="outline" >
      Sign Up
    </Button>
          <Button variant="surface">Login</Button>

          {/* Light Mode Button */}
          <button aria-label="Toggle Light Mode" className="text-gray-400 hover:text-gray-700 \">
            {/* Example icon for light mode */}
            {/* <Avatar
    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
    fallback="A"
    radius="full"
    onClick={() => alert('Clicked!')}
  /> */}
  <Dropdown/>
           
          </button>
        </div>
    </div>
  </Container>
</Box>
    </div>
  )
}

export default Nav
