import React, { useState } from 'react'
import ProfileCard from './ProfileCard'
import { IoLocationSharp, IoSpeedometer, IoSpeedometerOutline } from 'react-icons/io5'

const TopBar = ({open}) => {
  return (
    <div className='fixed top-0 left-0 right-0 bg-foreground-blue pt-1 pb-2 shadow'>
          <div className='flex'>
            <div>
            <div className='my-auto ml-2'>
              {/* <img  alt='logo' className={`relative  ${open?"left-[0px]":"-left-[190px]"} duration-300`} />               */}
              {/* <img  alt='logo' className='fixed -mt-[43px] bg-white '/> */}
             
              <IoSpeedometerOutline className="ml-2 mb-1 text-[#3859C7] mr-2 inline-block" size={20} />   
<div className={`relative inline-block ${open ? "mt-3 left-[0px]" : "-left-[190px]"} duration-300`}>
    <div className='text-md font-medium text-[#3859C7] duration-150'>Read For Speed</div>
</div>


              <div className='fixed left-0 top-0 bg-white w-[10px] h-[50px] text-white'>.</div>
            </div>
            </div>          
            <div className='relative ml-auto pr-5'>
              <ProfileCard/>
            </div>
          </div>
    </div>
  )
}

export default TopBar