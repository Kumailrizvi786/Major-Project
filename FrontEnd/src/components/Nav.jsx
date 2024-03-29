import React from 'react'
import  {Container, Box,DropdownMenu, Section,Avatar,IconButton,Tooltip, Heading,Button} from '@radix-ui/themes';
import {SunIcon,MoonIcon, MagnifyingGlassIcon} from '@radix-ui/react-icons';
import Dropdown from './Dropdown';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { IoSpeedometerOutline,  IoSpeedometer } from "react-icons/io5";
import { FaBookReader, FaLock } from "react-icons/fa";
import { FiLogIn } from 'react-icons/fi';
function Nav({ onThemeChange, getCurrentTheme}) {
    const theme = getCurrentTheme();
    console.log(theme)
  return (
    <div>
   <Box style={{ background: 'var(--gray-a2)',boxShadow:'var(--shadow-5)', borderRadius: 'var(--radius-3)' }}>
  <Container size="7" py="4">
  <div className="flex justify-between items-center">
    {/* <Section></Section> */}
    {/* <div> */}
    <div className="flex items-center">
      <IoSpeedometerOutline className="mr-2 text-[#3859C7]" size={24} />
      {/* <FaBookReader  className="mr-2 text-[#3859C7]" size={24} /> */}
      <Link to="/">
      <Heading align="left" as="div" className="text-[#3859C7]">
        Read For Speed
      </Heading>
      </Link>
    </div>
    {/* </div> */}
  <nav className="flex justify-center space-x-4">
        <Link to="/" color="gray">Home</Link>
        <Link to="/explore" color="gray">Explore 
      
        </Link>
        <DropdownMenu.Root>
    <DropdownMenu.Trigger>
      {/* inline icon and link */}
      <div className="flex items-center space-x-1">
    <Link href="/practice" className="flex items-center space-x-1" color="gray">
      Practice
        <DropdownMenu.TriggerIcon className='ml-2'/>
        </Link>
      </div>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content variant="soft">

      <DropdownMenu.Item shortcut="⌘ I">
<Link to="/instruction">
        Instruction
        </Link>
        </DropdownMenu.Item>
    
      <Link to="/exercise">
      <DropdownMenu.Item shortcut="⌘ E" onClick={()=>{toast.error("Please Login to start exercise!")}}>Exercise 
      <FaLock/>
      </DropdownMenu.Item>
        </Link>
      <DropdownMenu.Separator />
      <DropdownMenu.Item shortcut="⌘ R" onClick={()=>{toast.error("Please Login to see Results!")}}>Result
      <FaLock/>
      </DropdownMenu.Item>

      <DropdownMenu.Separator />
      <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
        Delete
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
  <Link to="leaderboard" className="flex items-center space-x-1" color="gray" onClick={()=>{toast.error("Please Login to see leaderboard!")}}>
          Leaderboard <FaLock className='ml-2 mb-1' />
        </Link>
        <Link to="/contact" color="gray">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4 mr-4">
        <Tooltip content="Change theme">
          <IconButton size="1" variant="ghost">
            {
                theme === 'light' ? <MoonIcon height="18" width="18" color="gray" variant="outline" onClick={onThemeChange}/> : <SunIcon height="18" width="18" color="gray" variant="outline" onClick={onThemeChange}/>
            }
          {/* <SunIcon height="18" width="18" color="gray" variant="outline" onClick={onThemeChange}/> */}
       
        </IconButton>
          </Tooltip>
          <Link to="/signup">
         <Button color="plum" variant="outline" >
      Sign Up
    </Button>
    </Link>

    <Link to="/login">
          <Button variant="surface" color='indigo'>Login
          <FiLogIn/>
          </Button>
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
