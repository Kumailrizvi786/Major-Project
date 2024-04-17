import React, { useEffect } from 'react';
import * as Menubar from '@radix-ui/react-menubar';
import { IoSettingsOutline } from "react-icons/io5";
import { GoSignOut } from "react-icons/go";
import { FaPerson } from 'react-icons/fa6';
import { Avatar } from '@radix-ui/themes';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import getUser from '../utils/helper';


const ProfileCard = ()=>{
  const navigate = useNavigate();
//   const dispatch = useDispatch()
const handleSignOut = () => {
  // dispatch(logout())
  localStorage.removeItem('user')
  navigate('/login')
  // toast.success('User Logout successful');

}
  
   const userData = getUser()

  const usrDisplayName = userData.name
  return (
    <Menubar.Root className="flex bg-white">
      <Menubar.Menu>
        <Menubar.Trigger className="">
        <div className='flex flex-row items-center gap-x-1 hover:cursor-pointer'>
        <Avatar
    radius='full'
    // src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
    fallback={userData.name[0]}
  />


        <div className='align place-items-center hidden sm:block'>{usrDisplayName}</div>
        </div>
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
            align="start"
            sideOffset={5}
            alignOffset={-3}
          >
          <Menubar.Item className="flex flex-row sm:hidden hover:cursor-pointer leading-none text-violet11 rounded items-center h-[40px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                <div>
                  <FaPerson/>
                </div>  
                <div className='ml-2'>
                  {usrDisplayName}
                </div>       
            </Menubar.Item>
            <Link to="/profile">
            <Menubar.Item className="flex flex-row hover:cursor-pointer leading-none text-violet11 rounded items-center h-[40px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                <div>
                  <IoSettingsOutline/>
                </div>  
                <div className='ml-2'>
                  Account Settings
                </div>       
            </Menubar.Item>
            </Link>
            
            <Menubar.Separator className="h-[1px] bg-violet6 m-[5px]" />

            <Menubar.Item onClick={handleSignOut} className="flex flex-row hover:cursor-pointer leading-none text-violet11 rounded items-center h-[40px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none">
                <div>
                  <GoSignOut/>
                </div>  
                <div className='ml-2'>
                  Sign Out
                </div> 
            </Menubar.Item>
            
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>)
}

export default ProfileCard;