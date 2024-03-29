import { FiMoon, FiSun } from 'react-icons/fi'; 
import { Button, Link,Avatar,DropdownMenu, Tooltip,IconButton } from '@radix-ui/themes';
import {SunIcon, MagnifyingGlassIcon} from '@radix-ui/react-icons';
const Header = () => {
  return (
    <header className="bg-white text-gray-800 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold ml-4">Read For Speed</h1>

        {/* Navigation Links */}
        <nav className="flex justify-center space-x-4">
        <Link href="#" color="gray">Home</Link>
        <Link href="#" color="gray">Explore</Link>
        <DropdownMenu.Root>
    <DropdownMenu.Trigger>
      {/* inline icon and link */}
      <div className="flex items-center space-x-1">
    <Link href="#" color="gray">
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

        {/* Sign In and Dark Mode Button */}

        <div className="flex items-center space-x-4 mr-4">
        <Tooltip content="Change theme">
          <IconButton size="1" variant="ghost">
          <SunIcon height="18" width="18" color="gray" variant="outline" />
       
        </IconButton>
          </Tooltip>
         <Button color="gray" variant="outline" className=''>
      Sign Up
    </Button>
          <Button variant="surface">Login</Button>

          {/* Light Mode Button */}
          <button aria-label="Toggle Light Mode" className="text-gray-400 hover:text-gray-700 \">
            {/* Example icon for light mode */}
            <Avatar
    src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
    fallback="A"
    radius="full"
    onClick={() => alert('Clicked!')}
  />

  
           
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
