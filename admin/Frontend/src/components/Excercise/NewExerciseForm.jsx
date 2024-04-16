import React, { useState } from 'react';
import { Card, Text, Button, TextField } from '@radix-ui/themes';
import { PlusCircledIcon } from '@radix-ui/react-icons';

function NewExerciseForm() {
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
    <Card className="bg-white border rounded-lg p-8 max-w-md mx-auto shadow-md transition duration-300 transform hover:scale-105">
      <div className="flex items-center justify-center mb-6">
        <PlusCircledIcon className="h-12 w-12 text-indigo-500 mr-3" />
        <Text as="h2" size="4" className="text-2xl font-bold leading-none">Create New Exercise</Text>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            label="Title"
            placeholder="Enter exercise title"
            required
            className="w-full"
          />
        </div>
        <div className="mb-6">
          <TextField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            label="Description"
            placeholder="Enter exercise description"
            required
            className="w-full"
            multiline
          />
        </div>
        <Button type="submit" className="bg-indigo-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-indigo-600 transition duration-300">
          Create Exercise
        </Button>
      </form>
    </Card>
  );
}

export default NewExerciseForm;
