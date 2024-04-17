import React from 'react';
import './DashboardCard.css';
const DashboardCard = ({ bgColor, icon, value, description, additionalField, loading }) => {
  return (
    <div className={`lg:w-1/4 sm:w-1/2 mb-1`}>
      <div className="flex flex-wrap">
      {/* <div style={{ display: 'flex' }}> */}
      {/* <div className={`p-4 bg-${bgColor} shadow-md rounded-2xl`}> */}
        <div style={{ width: '400px', height: '130px', backgroundColor: `${bgColor}` }} className={`p-4 m-1 shadow-md rounded-md`} >
 
        <div className="flex items-center">
          
          <div>
            {/* {additionalField && <p className="text-blue-500" style={{ fontSize: '30px'}}><strong>{additionalField}</strong></p>} */}

             <p className="text-white" style={{ fontSize: '30px'}}><strong className={(loading && `animate-pulse`).toString()}>{additionalField }</strong></p>
            <h3 className={`text-base font-semibold leading-tight text-white`}>{value}</h3>
            <p className={`text-white text-sm`}>{description}</p>
          </div>
          <div className="flex-shrink-0 ml-auto">
            <div className={`flex items-center justify-center h-12 w-12 icon`}>
              {icon}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
 
export default DashboardCard;