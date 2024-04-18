import React, { useState } from 'react';
import { ArrowRightIcon, ArrowUpIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import { Button,Text, TextArea, Card, Flex, TextField } from '@radix-ui/themes';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeLowVision } from 'react-icons/fa6';
import { IoSparklesSharp } from 'react-icons/io5';
import { Dialog } from '@radix-ui/themes';
import { RiFormatClear } from 'react-icons/ri';

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

  const handleGenerate = () => {
    // e.preventDefault();
    // Generate dummy data
    const generatedData = {
      name: 'Generated Exercise',
      description: 'This exercise was generated automatically.',
      minAge: '6',
      maxAge: '12',
      level: 'Easy',
      contentType: 'Text only',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/150',
      contentDescription: 'Additional content description.',
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      correctAnswer: 'Paris'
    };
  
    // Update state with generated data
    setName(generatedData.name);
    setDescription(generatedData.description);
    setMinAge(generatedData.minAge);
    setMaxAge(generatedData.maxAge);
    setLevel(generatedData.level);
    setContentType(generatedData.contentType);
    setText(generatedData.text);
    setImage(generatedData.image);
    setContentDescription(generatedData.contentDescription);
    setQuestion(generatedData.question);
    setOptions(generatedData.options);
    setCorrectAnswer(generatedData.correctAnswer);
  };

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

  const handleClearForm = (e) => {
    e.preventDefault();
   
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
  }

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
        <Button onClick={handleGenerate}>Generate <IoSparklesSharp/></Button>
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
          <TextField.Root
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
            <TextField.Root
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
            <TextField.Root
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
        {/* Content type */}
<div className="mb-6">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="contentType">
    Content Type
  </label>
  <select
    id="contentType"
    value={contentType}
    onChange={(e) => setContentType(e.target.value)}
    required
    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  >
    <option value="">Select Content Type</option>
    <option value="AI Generated">AI Generated</option>
    <option value="Text only">Text only</option>
    <option value="Image with Text">Image with Text</option>
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
          <TextField.Root
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
          <TextField.Root
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
          <TextField.Root
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
          <TextField.Root
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
        <div className="flex justify-center jusmb-6 gap-2">
        <Button type="submit" className="w-half cursor-pointer">
          Add more Question <PlusCircledIcon/>
        </Button>
        <Button type="submit" className="w-half cursor-pointer">
        Submit Excercise  <ArrowRightIcon/>
        </Button>
        <Button onClick={handleClearForm} type="submit" className="w-half cursor-pointer">
         Clear Form <RiFormatClear/>
        </Button>
        </div>


      </form>
    </Card>
  );
}

export default NewExercise;
