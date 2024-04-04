import React, { useState } from 'react';
import { Heading } from '@radix-ui/themes';
import Breadcrumbs from '../../components/Breadcrumb';
import { useNavigate } from 'react-router-dom';

function Comprehension() {
  const [answers, setAnswers] = useState([]);
  const [speedReadingCalculation, setSpeedReadingCalculation] = useState('');
  const navigate = useNavigate();

  // Define your comprehension questions and answers here
  const questions = [
    {
      id: 1,
      question: 'What is the main idea of the text?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      answer: 'Option A', // Correct answer
    },
    {
      id: 2,
      question: 'Which statement is true according to the text?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      answer: 'Option B', // Correct answer
    },
    // Add more questions as needed
  ];

  const handleAnswerChange = (questionId, selectedOption) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionId - 1] = selectedOption;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    // Logic to grade the answers and provide feedback
    console.log('Submitted answers:', answers);

    // Calculate the score (just an example)
    const score = answers.filter((answer, index) => answer === questions[index].answer).length;

    // Calculate the total number of questions
    const totalQuestions = questions.length;

    // Calculate speed reading result
    const speedReadingResult = 'Your speed reading calculation result';
    setSpeedReadingCalculation(speedReadingResult);

    // Navigate to the result page
    navigate('/result', { state: { score, totalQuestions, speedReadingResult } });
  };

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Comprehension', href: '/comprehension' },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <Breadcrumbs items={breadcrumbs} />
      <Heading size="2" className="mb-4">Comprehension Questions</Heading>
      {questions.map((question) => (
        <div key={question.id} className="mb-4">
          <Heading size="3" className="mb-2">{question.question}</Heading>
          <ul>
            {question.options.map((option, index) => (
              <li key={index} className="mb-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option}
                    onChange={() => handleAnswerChange(question.id, option)}
                    className="mr-2"
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
}

export default Comprehension;
