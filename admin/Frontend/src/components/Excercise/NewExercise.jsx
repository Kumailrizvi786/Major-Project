import React, { useState } from 'react';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { Button,Text, TextArea, Card, Flex, TextField } from '@radix-ui/themes';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeLowVision } from 'react-icons/fa6';
import { IoSparklesSharp } from 'react-icons/io5';
import { Dialog } from '@radix-ui/themes';

function NewExercise() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');
  const [level, setLevel] = useState('');
  const [contentType, setContentType] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [contentDescription, setContentDescription] = useState('');
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission
    console.log('Exercise created:', {
      name,
      description,
      difficulty: { minAge, maxAge, level },
      contents: [
        {
          contentType,
          text,
          image,
          description: contentDescription,
          mcqs: [{ question, options, correctAnswer }]
        }
      ]
    });
    // Optionally, you can reset the form fields after submission
    setName('');
    setDescription('');
    setMinAge('');
    setMaxAge('');
    setLevel('');
    setContentType('');
    setText('');
    setImage(null);
    setContentDescription('');
    setQuestion('');
    setOptions(['', '']);
    setCorrectAnswer('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <Card className="p-6 mt-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <PlusCircledIcon className="h-8 w-8 text-[] mr-3" />
          <h2 className="text-2xl font-bold leading-none">Create New Exercise</h2>
        </div>
      
        <div className="flex items-center gap-2">
        <Dialog.Root>
  <Dialog.Trigger>
  <Button color='plum' radius="full" className="cursor-pointer">
            Generative Fill <IoSparklesSharp/>
          </Button>
  </Dialog.Trigger>

  <Dialog.Content maxWidth="450px">
    <Dialog.Title>Generative Fill <IoSparklesSharp className='inline'/></Dialog.Title>
    <Dialog.Description size="2" mb="4">
      Fill the form to generate exercises.
    </Dialog.Description>

    <Flex direction="column" gap="3">
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Enter Age Group
        </Text>
        <TextField.Root
          defaultValue="Child"
          placeholder="Enter age group"
        />
      </label>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Enter Category
        </Text>
        <TextField.Root
          defaultValue="History"
          placeholder="enter category"
        />
      </label>
      <label>
        <Text as="div" size="2" mb="1" weight="bold">
          Enter language
        </Text>
        <TextField.Root
          defaultValue="Hindi"
          placeholder="Enter language"
        />
      </label>
    </Flex>

    <Flex gap="3" mt="4" justify="end">
      <Dialog.Close>
        <Button variant="soft" color="gray">
          Cancel
        </Button>
      </Dialog.Close>
      <Dialog.Close>
        <Button>Generate <IoSparklesSharp/></Button>
      </Dialog.Close>
    </Flex>
  </Dialog.Content>
</Dialog.Root>
       
        <Link to="/all-exercises">
          <Button radius="full" className="cursor-pointer">
            View All Exercise <FaEye/>
          </Button>
        </Link>
      
          </div>
        
      </div>
      <form onSubmit={handleSubmit}>
        {/* Exercise name */}
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
        {/* Exercise description */}
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
        {/* Minimum and maximum age */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
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
          <div>
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
        </div>
        {/* Difficulty level */}
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
        {/* Content type */}
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="contentType">
            Content Type
          </label>
         
          <select
            id="contentType"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Content Type</option>
            <option value="text">Text only</option>
            <option value="image">Image with Text</option>
          
          </select>
        </div>
        {/* Text content */}
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="text">
            Text
          </label>
          <TextArea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text"
          ></TextArea>
        </div>
        {/* Image upload */}
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
            Image Url
          </label>
          <input
            id="image"
            type="text"
            placeholder='Enter image url'
            onChange={handleImageChange}
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {/* Content description */}
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="contentDescription">
            Content Description
          </label>
          <TextArea
            id="contentDescription"
            value={contentDescription}
            onChange={(e) => setContentDescription(e.target.value)}
            placeholder="Enter content description"
          ></TextArea>
        </div>
        {/* Question */}
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="question">
            Question
          </label>
          <input
            id="question"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter question"
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {/* Options */}
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="options">
            Options
          </label>
          <input
            id="options"
            type="text"
            value={options}
            onChange={(e) => setOptions(e.target.value.split(','))}
            placeholder="Enter comma-separated options"
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {/* Correct answer */}
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="correctAnswer">
            Correct Answer
          </label>
          <input
            id="correctAnswer"
            type="text"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            placeholder="Enter correct answer"
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {/* Submit button */}
        <Button type="submit" className="w-full cursor-pointer">
          Create Exercise
        </Button>
      </form>
    </Card>
  );
}

export default NewExercise;
