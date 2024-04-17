import React from 'react';
import { Card, Text, Button, Badge, TextField, AlertDialog, Flex } from '@radix-ui/themes';
import { PlusCircledIcon, Pencil1Icon, ListBulletIcon, TrashIcon, Pencil2Icon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ShowExcercise() {
  // Dummy data for exercises
  const exercises = [
    { id: 1, name: 'Exercise 1', description: 'Description for Exercise 1', difficulty: 'Easy' },
    { id: 2, name: 'Exercise 2', description: 'Description for Exercise 2', difficulty: 'Medium' },
    { id: 3, name: 'Exercise 3', description: 'Description for Exercise 3', difficulty: 'Hard' },
    { id: 4, name: 'Exercise 4', description: 'Description for Exercise 4', difficulty: 'Easy' }
  ];

  const handleEdit = (exerciseId) => {
    // Add logic to handle edit action
    console.log('Editing exercise with ID:', exerciseId);
  };

  const handleDelete = (exerciseId) => {
    // Add logic to handle delete action
    console.log('Deleting exercise with ID:', exerciseId);
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
          <div key={exercise.id} className="border rounded p-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">{exercise.name}</h3>
              <p className="text-gray-600">{exercise.description}</p>
              <p className="text-gray-500">Difficulty: <Badge>{exercise.difficulty}</Badge></p>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={() => handleEdit(exercise.id)} className="text-indigo-500 hover:text-indigo-700">
                <Pencil2Icon className="h-6 w-6" />
              </button>
              <button onClick={() => handleDelete(exercise.id)} className="text-red-500 hover:text-red-700">
                
                <AlertDialog.Root>
  <AlertDialog.Trigger>
  <TrashIcon className="h-6 w-6" />
  </AlertDialog.Trigger>
  <AlertDialog.Content maxWidth="450px">
    <AlertDialog.Title>Delete Excercise</AlertDialog.Title>
    <AlertDialog.Description size="2">
      Are you sure? you want to delete this exercise.
    </AlertDialog.Description>

    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">
          Cancel
        </Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button variant="solid" color="red">
          Delete
        </Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>
              </button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default ShowExcercise;
