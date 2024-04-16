import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';
import { RiHome2Line } from 'react-icons/ri';

function Usermanagement() {
    const breadcrumbsItems = [
        { text: 'Home', link: '/', icon: <RiHome2Line /> },
        { text: 'User Management' },
      ];
  return (
    <div>
       <>
      <div className='flex flex-col pt-16 p-4'>
        <Breadcrumbs items={breadcrumbsItems} />
        <div className="flex flex-wrap">

        </div>
       
        


      
      </div>
    </>
    </div>
  )
}

export default Usermanagement
