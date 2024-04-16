import React, { useState } from 'react';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { Button, TextArea, Card } from '@radix-ui/themes';
import { Link } from 'react-router-dom';

function NewExercise() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');
  const [level, setLevel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission
    console.log('Exercise created:', { name, description, difficulty: { minAge, maxAge, level } });
    // Optionally, you can reset the form fields after submission
    setName('');
    setDescription('');
    setMinAge('');
    setMaxAge('');
    setLevel('');
  };

  return (
    <Card className="p-6 mt-4">
      <div className="flex items-center justify-between mb-6">
      <div className="flex items-center">
        <PlusCircledIcon className="h-8 w-8 text-[] mr-3" />
        <h2 className="text-2xl font-bold leading-none">Create New Exercise</h2>
      </div>
      <Link to="/all-exercises">
        <Button radius='full' className='cursor-pointer'>
          View All Exercise
        </Button>
        </Link>
        </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter exercise name"
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
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="minAge">
            Minimum Age
          </label>
          <input
            id="minAge"
            type="number"
            value={minAge}
            onChange={(e) => setMinAge(e.target.value)}
            placeholder="Enter minimum age"
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="maxAge">
            Maximum Age
          </label>
          <input
            id="maxAge"
            type="number"
            value={maxAge}
            onChange={(e) => setMaxAge(e.target.value)}
            placeholder="Enter maximum age"
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="level">
            Level
          </label>
          <select
            id="level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select level</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <Button type="submit" className="w-full cursor-pointer">
          Create Exercise
        </Button>
      </form>
    </Card>
  );
}

export default NewExercise;
