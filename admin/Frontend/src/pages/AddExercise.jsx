import React from 'react'
import NewExercise from '../components/Excercise/NewExercise';
import { RiHome2Line } from 'react-icons/ri';
import Breadcrumbs from '../components/Breadcrumbs';

function AddExercise() {
    const breadcrumbsItems = [
        { text: 'Home', link: '/', icon: <RiHome2Line /> },
        { text: 'Add New Exercise' },
      ];
  return (
    <div>
       <>
      <div className='flex flex-col pt-16 p-4'>
        <Breadcrumbs items={breadcrumbsItems} />
        <div className="flex flex-wrap">
                <NewExercise/>
        </div>
        {/* <CreateExercise/> */}
       
        


      
      </div>
    </>
    </div>
  )
}

export default AddExercise





