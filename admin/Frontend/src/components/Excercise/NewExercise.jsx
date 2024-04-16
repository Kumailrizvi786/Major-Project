import { PlusCircledIcon } from '@radix-ui/react-icons';
import { Button, TextArea } from '@radix-ui/themes';
import React, { useState } from 'react';

function NewExercise() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission
    console.log('Exercise created:', { title, description });
    // Optionally, you can reset the form fields after submission
    setTitle('');
    setDescription('');
  };

  return (
    <div className="p-8 max-w-lg mx-auto ">
      <div className="flex items-center justify-center mb-6">
        <PlusCircledIcon className="h-10 w-10 text-[] mr-3" />
        <h2 className="text-2xl font-bold leading-none">Create New Exercise</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter exercise title"
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Description
          </label>
          <TextArea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter exercise description"
           
          ></TextArea>
        </div>
        <Button
          type="submit"
          className="w-full cursor-pointer"
        >
          Create Exercise
        </Button>
      </form>
    </div>
  );
}

export default NewExercise;
