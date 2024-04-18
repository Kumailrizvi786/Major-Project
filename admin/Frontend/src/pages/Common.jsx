import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';
import { RiAlarmWarningLine, RiHome2Line, RiHourglass2Fill, RiShoppingCart2Line, RiTruckLine } from 'react-icons/ri';


function Common() {
     
    const breadcrumbsItems = [
        { text: 'Home', link: '/', icon: <RiHome2Line /> },
        { text: 'Dashboard' },
      ];

  return (
    <div>
       <>
      <div className='flex flex-col pt-16 p-4'>
        <Breadcrumbs items={breadcrumbsItems} />
        {/* <div className="flex flex-wrap">
                <AllCard/>
        </div> */}
        <div className="flex flex-wrap">
                </div>
    
       
        


      
      </div>
    </>
    </div>
  )
}

export default Common
