import React from 'react'
import  {Container, Box,DropdownMenu, Section,Avatar,IconButton,Tooltip, Heading,Button} from '@radix-ui/themes';
import {SunIcon, MagnifyingGlassIcon} from '@radix-ui/react-icons';
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
function Nav({ onThemeChange }) {
  return (
    <div>
   <Box style={{ background: 'var(--gray-a2)',boxShadow:'var(--shadow-5)', borderRadius: 'var(--radius-3)' }}>
  <Container size="7" py="4">
  <div className="flex justify-between items-center">
    {/* <Section></Section> */}
    {/* <div> */}
  <Heading align="left" as="div">Read For Speed</Heading>
    {/* </div> */}
  <nav className="flex justify-center space-x-2">
        <Link to="/" color="gray">Home</Link>
        <Link to="/explore" color="gray">Explore</Link>
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
  <Link to="leaderboard" color="gray">Leaderboard</Link>
        <Link to="/contact" color="gray">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4 mr-4">
        <Tooltip content="Change theme">
          <IconButton size="1" variant="ghost">
          <SunIcon height="18" width="18" color="gray" variant="outline" onClick={onThemeChange}/>
       
        </IconButton>
          </Tooltip>
          <Link to="/signup">
         <Button color="gray" variant="outline" >
      Sign Up
    </Button>
    </Link>

    <Link to="/login">
          <Button variant="surface">Login</Button>
</Link>
          {/* Light Mode Button */}
          <button aria-label="Toggle Light Mode" className="text-gray-400 hover:text-gray-700 \">
         
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
