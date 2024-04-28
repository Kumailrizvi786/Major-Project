import React, { useEffect, useState } from 'react'
import { RiHome2Line } from 'react-icons/ri';
import Breadcrumbs from '../components/Breadcrumbs';
import ShowExcercise from '../components/Excercise/ShowExcercise';
import axios from 'axios';
import EditExercise from '../components/Excercise/EditExercise';
import { useLocation, useParams } from 'react-router-dom';

function EditExercisePage() {
  // const {name} = useParams();
  const location = useLocation();
  const { id, name } = location.state;
  console.log('ID2:', id);
  const [exercises, setExercise] = useState([]);
  const [loading, setLoading] = useState(false);


  const getAllExercise = async () => {
    const url = 'http://localhost:8000/admin/exercise/getAll';
    
    try{
      setLoading(true);
      const response = await axios.get(url);
      console.log(response.data);
      setExercise(response.data);
      setLoading(false);

    }catch(error){
      setLoading(false);
      console.error(error);
      toast.error("Unable to fetch data!")
    }
  }


  useEffect(() => {
          
    getAllExercise();
  }, []);



  
 
  
    const breadcrumbsItems = [
        { text: 'Home', link: '/', icon: <RiHome2Line /> },
        { text: 'Edit Exercise' },
      ];
  return (
    
       <div>
            <div className='flex flex-col pt-16 p-4'>
        <Breadcrumbs items={breadcrumbsItems} />
        
                <EditExercise exerciseName={name} name={id}/>
        
        {/* <CreateExercise/> */}
       
        


      
      </div>
    </div>
   
  )
}

export default EditExercisePage






