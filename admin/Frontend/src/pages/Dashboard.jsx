import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';
import { RiAlarmWarningLine, RiHome2Line, RiHourglass2Fill, RiShoppingCart2Line, RiTruckLine } from 'react-icons/ri';
import AllCard from '../components/AllCard';
import CreateExercise from '../components/Excercise/CreateExcercise';
import DashboardCard from '../components/DashboardCard';
import { FiSettings } from 'react-icons/fi';
import { FaUserAstronaut, FaUserCheck, FaUserDoctor, FaUserGraduate } from 'react-icons/fa6';

function Dashboard() {
     
    const breadcrumbsItems = [
        { text: 'Home', link: '/', icon: <RiHome2Line /> },
        { text: 'Dashboard' },
      ];

      const dashData = {
        woTotal: 10,
        woGenerated: 50,
        woInTransit: 30,
        woWaitingForApproval: 20
      }

  return (
    <div>
       <>
      <div className='flex flex-col pt-16 p-4'>
        <Breadcrumbs items={breadcrumbsItems} />
        {/* <div className="flex flex-wrap">
                <AllCard/>
        </div> */}
        <div className="flex flex-wrap">
          <DashboardCard loading={false} bgColor="#0073B7" icon={<FiSettings  />} value="Total Exercise" additionalField={dashData.woTotal} description="Last 30 Days"  />
          <DashboardCard loading={false} bgColor="#00C0EF" icon={<FaUserAstronaut  />} value="Registered User" additionalField={dashData.woGenerated} description="Last 30 Days" />
          <DashboardCard loading={false} bgColor="#F39C12" icon={<FaUserGraduate  />} value="Top Users" additionalField={dashData.woInTransit} description="Last 30 Days"  />
          <DashboardCard loading={false} bgColor="#00A65A" icon={<RiAlarmWarningLine  />} value="Total Etc." additionalField={dashData.woWaitingForApproval} description="Last 30 Days"  />
        </div>
        <CreateExercise/>
       
        


      
      </div>
    </>
    </div>
  )
}

export default Dashboard
