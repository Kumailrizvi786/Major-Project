import React from 'react'
import NewExercise from '../components/Excercise/NewExercise';
import { RiHome2Line } from 'react-icons/ri';
import Breadcrumbs from '../components/Breadcrumbs';
import ShowExcercise from '../components/Excercise/ShowExcercise';

function AddExercise() {
    const breadcrumbsItems = [
        { text: 'Home', link: '/', icon: <RiHome2Line /> },
        { text: 'All Exercise' },
      ];
  return (
    
       <div>
            <div className='flex flex-col pt-16 p-4'>
        <Breadcrumbs items={breadcrumbsItems} />
        
                <ShowExcercise/>
        
        {/* <CreateExercise/> */}
       
        


      
      </div>
    </div>
   
  )
}

export default AddExercise





