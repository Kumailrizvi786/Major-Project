import React from 'react';
import { DropdownMenu,Avatar } from '@radix-ui/themes';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logout } from '../features/authSlice';
import {toast} from  "react-hot-toast"
function Dropdown() {
  const dispatch = useDispatch()
  return (
    <DropdownMenu.Root>
      {/* Trigger the dropdown when Avatar is clicked */}
      <DropdownMenu.Trigger>
        {/* Avatar wrapped with Link */}
        <Link href="#" color="gray">
          {/* Replace Avatar with your Avatar component */}
          <Avatar
            src="./img/sahil.jpg"
            fallback="A"
            radius="full"
            onClick={(e) => e.preventDefault()} // Prevent default click action
          />
        </Link>
      </DropdownMenu.Trigger>
      {/* Dropdown Content */}
      <DropdownMenu.Content variant="soft">
        <Link to="/profile" color="gray">
        <DropdownMenu.Item shortcut="⌘ P">Profile</DropdownMenu.Item>
        </Link>
        <DropdownMenu.Item shortcut="⌘ E">Exercise</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <Link to="/changepassword" color="gray">
        <DropdownMenu.Item shortcut="⌘ R">Change Password</DropdownMenu.Item>
        </Link>
        <DropdownMenu.Separator />
        <DropdownMenu.Item shortcut="⌘ ⌫" color="red"  onClick={() => {
                dispatch(logout());
                toast.success("Logout Successfully!")
              }}>
          Logout
        </DropdownMenu.Item>
        {/*   <NavLink
              onClick={() => {
                dispatch(logout());
              }}
              className="border border-black hover:bg-black hover:text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </NavLink> */}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default Dropdown;
