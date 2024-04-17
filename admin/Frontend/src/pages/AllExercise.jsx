import React from 'react'
import NewExercise from '../components/Excercise/NewExercise';
import { RiHome2Line } from 'react-icons/ri';
import Breadcrumbs from '../components/Breadcrumbs';
import ShowExcercise from '../components/Excercise/ShowExcercise';

function AddExercise() {

  const exercises = [
    { 
      id: 1, 
      name: 'Exercise 1', 
      description: 'Description for Exercise 1', 
      difficulty: 'Easy', 
      content: {
        contentType: 'text',
        text: 'This is the content of Exercise 1',
        imageUrl: null,
        description: 'Description of the content',
        mcqs: [
          {
            question: 'Question 1',
            options: ['Option A', 'Option B', 'Option C', 'Option D'],
            correctAnswer: 'Option B'
          },
          {
            question: 'Question 2',
            options: ['Option X', 'Option Y', 'Option Z'],
            correctAnswer: 'Option Y'
          }
        ]
      }
    },
    { 
      id: 2, 
      name: 'Exercise 2', 
      description: 'Description for Exercise 2', 
      difficulty: 'Medium', 
      content: {
        contentType: 'image',
        text: '',
        imageUrl: 'https://example.com/image2.jpg',
        description: 'Description of the content',
        mcqs: [
          {
            question: 'Question 1',
            options: ['Option A', 'Option B', 'Option C'],
            correctAnswer: 'Option B'
          }
        ]
      }
    },
    { 
      id: 3, 
      name: 'Exercise 3', 
      description: 'Description for Exercise 3', 
      difficulty: 'Hard', 
      content: {
        contentType: 'text',
        text: 'This is the content of Exercise 3',
        imageUrl: null,
        description: 'Description of the content',
        mcqs: [
          {
            question: 'Question 1',
            options: ['Option A', 'Option B', 'Option C'],
            correctAnswer: 'Option A'
          },
          {
            question: 'Question 2',
            options: ['Option X', 'Option Y', 'Option Z'],
            correctAnswer: 'Option Z'
          }
        ]
      }
    },
    { 
      id: 4, 
      name: 'Exercise 4', 
      description: 'Description for Exercise 4', 
      difficulty: 'Easy', 
      content: {
        contentType: 'text',
        text: 'This is the content of Exercise 4',
        imageUrl: null,
        description: 'Description of the content',
        mcqs: [
          {
            question: 'Question 1',
            options: ['Option A', 'Option B', 'Option C'],
            correctAnswer: 'Option C'
          }
        ]
      }
    }
  ];
  
 
  
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





