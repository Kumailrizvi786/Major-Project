import React, { useState, useEffect } from 'react';
import { ArrowRightIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import { Button, Text, TextArea, Card, TextField, Skeleton } from '@radix-ui/themes';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { IoSparklesSharp } from 'react-icons/io5';
import { RiEdit2Line, RiFormatClear } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';

function EditExercise({ exerciseName,name }) {

  // const {state} = useParams();
  
  console.log('ID:', exerciseName)
  const [exerciseData, setExerciseData] = useState({
    name: '',
    description: '',
    difficulty: {
      minAge: '',
      maxAge: '',
      level: ''
    },
    contents: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:8000/admin/exercise/getById/${name}`);
        console.log('Exercise data:', response.data);
        setExerciseData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching exercise data:', error);
        setError('Failed to fetch exercise data');
        setLoading(false);
      }
    };

    fetchExerciseData();
  }, [exerciseName]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExerciseData({ ...exerciseData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.put(`http://localhost:8000/admin/exercise/updateByName/`, exerciseData);
      console.log('Exercise updated:', response.data);
      toast.success('Exercise updated successfully');
    } catch (error) {
      console.error('Error updating exercise:', error);
      setError('Failed to update exercise. Please try again.');
      toast.error('Failed to update exercise. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClearForm = (e) => {
    e.preventDefault();
    setExerciseData({
      name: '',
      description: '',
      difficulty: {
        minAge: '',
        maxAge: '',
        level: ''
      },
      contents: []
    });
    toast.success('Form cleared successfully');
  };
  return (
    <Card className="p-6 mt-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <RiEdit2Line className="h-8 w-8 text-[] mr-3" />
          <h2 className="text-2xl font-bold leading-none">Edit Exercise</h2>
        </div>
        <Link to="/all-exercises">
          <Button radius="full" className="cursor-pointer">
            View All Exercise
          </Button>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <Skeleton loading={loading}>
            <TextField.Root
              id="name"
              name="name"
              type="text"
              value={exerciseData.name}
              onChange={handleInputChange}
              placeholder="Enter exercise name"
              required
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </Skeleton>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Description
          </label>
          <Skeleton loading={loading}>
            <TextArea
              id="description"
              name="description"
              value={exerciseData.description}
              onChange={handleInputChange}
              placeholder="Enter exercise description"
            ></TextArea>
          </Skeleton>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="minAge">
              Minimum Age
            </label>
            <Skeleton loading={loading}>
              <TextField.Root
                id="minAge"
                name="minAge"
                type="number"
                value={exerciseData?.difficulty?.minAge}
                onChange={handleInputChange}
                placeholder="Enter minimum age"
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </Skeleton>
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="maxAge">
              Maximum Age
            </label>
            <Skeleton loading={loading}>
              <TextField.Root
                id="maxAge"
                name="maxAge"
                type="number"
                value={exerciseData?.difficulty?.maxAge}
                onChange={handleInputChange}
                placeholder="Enter maximum age"
                required
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </Skeleton>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="level">
            Level
          </label>
          <select
            id="level"
            name="level"
            value={exerciseData?.difficulty?.level}
            onChange={handleInputChange}
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select level</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="contentType">
            Content Type
          </label>
          <select
            id="contentType"
            name="contentType"
            value={exerciseData?.content?.contentType}
            onChange={handleInputChange}
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Content Type</option>
            <option value="text">Text only</option>
            <option value="textOnImage">Image with Text</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="text">
            Text
          </label>
          <TextArea
            id="text"
            name="text"
            value={exerciseData?.content?.text}
            onChange={handleInputChange}
            placeholder="Enter text"
          ></TextArea>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="contentDescription">
            Content Description
          </label>
          <TextArea
            id="contentDescription"
            name="contentDescription"
            value={exerciseData?.content?.description}
            onChange={handleInputChange}
            placeholder="Enter content description"
          ></TextArea>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="question">
            Question
          </label>
          <TextField.Root
            id="question"
            name="question"
            type="text"
            value={exerciseData?.content?.mcqs[0]?.question}
            onChange={handleInputChange}
            placeholder="Enter question"
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="options">
            Options
          </label>
          <TextField.Root
            id="options"
            name="options"
            type="text"
            value={exerciseData?.content?.mcqs[0]?.options}
            onChange={(e) => setExerciseData({ ...exerciseData, options: e.target.value.split(',') })}
            placeholder="Enter comma-separated options"
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="correctAnswer">
            Correct Answer
          </label>
          <TextField.Root
            id="correctAnswer"
            name="correctAnswer"
            type="text"
            value={exerciseData?.content?.mcqs[0]?.correctAnswer}
            onChange={handleInputChange}
            placeholder="Enter correct answer"
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-center jusmb-6 gap-2">
          <Button type="submit" className="w-half cursor-pointer">
            Update Exercise <ArrowRightIcon/>
          </Button>
          <Button onClick={handleClearForm} type="button" className="w-half cursor-pointer">
            Clear Form <RiFormatClear/>
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default EditExercise;
