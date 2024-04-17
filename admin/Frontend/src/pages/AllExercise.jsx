import React, { useEffect, useState } from 'react'
import NewExercise from '../components/Excercise/NewExercise';
import { RiHome2Line } from 'react-icons/ri';
import Breadcrumbs from '../components/Breadcrumbs';
import ShowExcercise from '../components/Excercise/ShowExcercise';
import axios from 'axios';

function AddExercise() {
  const [exercises, setExercise] = useState([]);

  const getAllExercise = async () => {
    const url = 'http://localhost:8000/admin/exercise/getAll';
    try{
      const response = await axios.get(url);
      console.log(response.data);
      setExercise(response.data);


    }catch(error){
      console.error(error);
    }
  }


  useEffect(() => {
          
    getAllExercise();
  }, []);



  
 
  
    const breadcrumbsItems = [
        { text: 'Home', link: '/', icon: <RiHome2Line /> },
        { text: 'All Exercise' },
      ];
  return (
    
       <div>
            <div className='flex flex-col pt-16 p-4'>
        <Breadcrumbs items={breadcrumbsItems} />
        
                <ShowExcercise exercises={exercises}/>
        
        {/* <CreateExercise/> */}
       
        


      
      </div>
    </div>
   
  )
}

export default AddExercise





