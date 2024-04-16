import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';
import { RiHome2Line } from 'react-icons/ri';
import AllCard from '../components/AllCard';

function Dashboard() {
    const breadcrumbsItems = [
        { text: 'Home', link: '/', icon: <RiHome2Line /> },
        { text: 'Dashboard' },
      ];
  return (
    <div>
       <>
      <div className='flex flex-col pt-16 p-4'>
        <Breadcrumbs items={breadcrumbsItems} />
        <div className="flex flex-wrap">
                <AllCard/>
        </div>
       
        


      
      </div>
    </>
    </div>
  )
}

export default Dashboard