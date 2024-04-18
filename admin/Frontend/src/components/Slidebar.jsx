import React, { useState } from 'react'
import { RxDashboard, RxCardStack, RxCardStackPlus, RxStack } from "react-icons/rx";
import { FaPeopleGroup, FaPeopleArrows, FaArrowLeftLong} from "react-icons/fa6";
import { SiTestrail } from "react-icons/si";
import { FiBox } from "react-icons/fi";
import { IoDocumentText, IoPerson, IoLocationSharp } from "react-icons/io5";
import { FaStreetView } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import TopBar from './Topbar';

const Sidebar = () => {
  const [open,setOpen] = useState(true)
  const isAuthorized = true

  const NavMenu = [
    { title:"Dashboard", path:'/', icon:<RxDashboard/>},
    { title:"User Management", path:'/usermanagement',  icon:<RxCardStackPlus />},
    { title:"Exercise Management", path:'/exercise-management',  icon:<RxStack  />},
    { title:"Categories", path:'/workorderAllocation',  icon:<RxCardStack />},
  ]
  const MastersMenu = [
    { title:"Media Library", path:'/labLocations',  icon:<IoLocationSharp />},
    { title:"Analytics", path:'/teams',  icon:<FaPeopleGroup/>},
    { title:"Reports", path:'/testStuites',  icon:<SiTestrail/>},
    { title:"Tools", path:'/testCases',  icon:<FiBox/>},
    { title:"Appearance", path:'/workOrderTypes',  icon:<IoDocumentText/>},
    { title:"Security ", path:'/airterUsers',  icon:<IoPerson />},    
    { title:"General Settings", path:'/partners',  icon:<FaStreetView/>}
  ]
  const MenuList = ({list,listTitle}) =>{
    return(
    <div className='flex flex-col mb-3'>
            <div className={`flex text-xs p-2 text-slate-500 -ml-2 ${!open && 'text-white hover:cursor-default'}`}>{listTitle}</div>
            {
              list.map((item,index)=>(
                <NavLink to={item.path} key={index} 
                className={({isActive})=>{
                  return `flex  hover:text-slate-900 hover:cursor-pointer hover:bg-sky-100 pb-2 pt-1.5 rounded ${open?'max-w-[180px]':'max-w-[32px]'}  ` +
                  (isActive?'text-slate-900 bg-slate-300':'text-slate-700') 
                  
                }}
                >
                  
                  <div className='mt-1 duration-500 px-2'>
                    {item.icon}                                      
                  </div>
                  
                  <div className={`text-nowrap text-sm font-medium ${!open && 'hidden'} duration-500`}>
                  {item.title}
                  </div>
                  
                </NavLink>
              ))
            }
        </div>
        )
  }
  return (
    <>
    <div className={`bg-foreground-blue border h-screen pl-5 pt-20 ${open ? "w-56" : "w-[80px]"} duration-500 sticky top-0 float-left`}>
      <TopBar open={open}/>
        <RxHamburgerMenu className={`hover:cursor-pointer w-7 h-6 rounded-full fixed  top-5  ${open?"left-[190px]":"left-[90px]"} duration-300`}
          onClick={() => setOpen(prevOpen => !prevOpen)} />          
        <MenuList list={NavMenu} listTitle={'Navigation'} />
        {isAuthorized && <MenuList list={MastersMenu}  listTitle={'Masters'}/>}
        
      </div>
    </>
  )
}

export default Sidebar