import React from 'react';
import { Card, Text, Button, Badge, TextField, AlertDialog, Flex } from '@radix-ui/themes';
import { ListBulletIcon, MagnifyingGlassIcon, Pencil2Icon, TrashIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';

function ShowExcercise({ exercises }) {
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
          <div key={exercise._id} className="border rounded p-4 flex items-center justify-between">
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
                <div className="flex items-center">
                  <span className="text-gray-700 font-semibold">Question:</span>
                  <span className="ml-2">{exercise.content.mcqs[0].question}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700 font-semibold">Options:</span>
                  <span className="ml-2">{exercise.content.mcqs[0].options.join(', ')}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700 font-semibold">Correct Answer:</span>
                  <span className="ml-2">{exercise.content.mcqs[0].correctAnswer}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button onClick={() => handleEdit(exercise._id)} className="text-indigo-500 hover:text-indigo-700">
                <Pencil2Icon className="h-6 w-6" />
              </button>
              <button onClick={() => handleDelete(exercise._id)} className="text-red-500 hover:text-red-700">
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
