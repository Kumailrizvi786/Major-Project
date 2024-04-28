import React from 'react';
import { Card, Text, Button, Badge, TextField, AlertDialog, Flex, Skeleton } from '@radix-ui/themes';
import { ListBulletIcon, MagnifyingGlassIcon, Pencil2Icon, TrashIcon } from '@radix-ui/react-icons';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function ShowExercise({ loading, exercises, getAllExercise }) {
  const navigate = useNavigate();
  // const {pname} = useParams();
  console.log('Exercises:', exercises);

  const handleEdit = (id, name) => {
    console.log('Editing exercise with ID:', id);
    // Redirect to the edit exercise page
    // alert(JSON.stringify(`/edit-exercise/${id}`))
    navigate(`/edit-exercise/${id}`, { state: { id, name } });
  
  };

  const handleDelete = async (exerciseId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/admin/exercise/deleteById/${exerciseId}`);
      if (response.status === 200) {
        // Remove the deleted exercise from the state or re-fetch the exercises list
        console.log('Exercise deleted successfully:', exerciseId);
        toast.success('Exercise deleted successfully');
        getAllExercise();

      } else {
        console.error('Failed to delete exercise:', response.statusText);
        toast.error('Failed to delete exercise');
      }
    } catch (error) {
      console.error('Error deleting exercise:', error.message);
      toast.error('Failed to delete exercise');
    }
  };

  return (
    <Card className="p-6 mt-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <ListBulletIcon className="h-12 w-12 text-indigo-500 mr-3" />
          <Text as="h2" size="4" className="text-2xl font-bold leading-none">All Exercises</Text>
        </div>
        {/* search  */}
        <div className="flex items-center space-x-4">
          <TextField.Root placeholder="Search exercise…">
            <TextField.Slot>
              <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
        </div>
        <Link to="/create-exercise">
          <Button radius='full' className='cursor-pointer'>
            Add New Exercise
          </Button>
        </Link>
      </div>
      <div className="space-y-4">
      {exercises.map((exercise) => (
  <Skeleton loading={loading} key={exercise._id}>
    <Card className="rounded p-4 flex items-center justify-between">
      <div>
        <h3 className="text-2xl font-bold mb-2">{exercise.name}</h3>
        <p className="text-gray-600 mb-4">{exercise.description}</p>
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center">
            <span className="text-gray-700 font-semibold">Difficulty:</span>
            <Badge className="ml-2">{exercise.difficulty.level}</Badge>
          </div>
          <div className="flex items-center">
            <span className="text-gray-700 font-semibold">Min Age:</span>
            <span className="ml-2">{exercise.difficulty.minAge}</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-700 font-semibold">Max Age:</span>
            <span className="ml-2">{exercise.difficulty.maxAge}</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-700 font-semibold">Content Type:</span>
            <span className="ml-2">{exercise.content.contentType}</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-700 font-semibold">Content Description:</span>
            <span className="ml-2">{exercise.content.description}</span>
          </div>
          {/* Display all questions for this exercise */}
          {exercise.content.mcqs.map((mcq, index) => (
            <div key={mcq._id}>
              <div className="flex items-center">
                <span className="text-gray-700 font-semibold">Question {index + 1}:</span>
                <span className="ml-2">{mcq.question}</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-700 font-semibold">Options:</span>
                <span className="ml-2">{mcq.options.join(', ')}</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-700 font-semibold">Correct Answer:</span>
                <span className="ml-2">{mcq.correctAnswer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Action buttons */}
      <div className="flex items-center space-x-2">
        <button onClick={() => handleEdit(exercise._id, exercise.name)} className="text-indigo-500 hover:text-indigo-700">
          <Pencil2Icon className="h-6 w-6" />
        </button>
        <button className="text-red-500 hover:text-red-700">
          <AlertDialog.Root>
            <AlertDialog.Trigger>
              <TrashIcon className="h-6 w-6" />
            </AlertDialog.Trigger>
            <AlertDialog.Content maxWidth="450px">
              <AlertDialog.Title>Delete Exercise</AlertDialog.Title>
              <AlertDialog.Description size="2">
                Are you sure you want to delete this exercise?
              </AlertDialog.Description>
              <Flex gap="3" mt="4" justify="end">
                <AlertDialog.Cancel>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                  <Button variant="solid" color="red" onClick={() => handleDelete(exercise._id)}>
                    Delete
                  </Button>
                </AlertDialog.Action>
              </Flex>
            </AlertDialog.Content>
          </AlertDialog.Root>
        </button>
      </div>
    </Card>
  </Skeleton>
))}

      </div>
    </Card>
  );
}

export default ShowExercise;
