import React, { useState } from 'react';
import { Heading } from '@radix-ui/themes';
import Breadcrumbs from '../../components/Breadcrumb';
import { useNavigate , useLocation} from 'react-router-dom';

function Comprehension() {
  const { state } = useLocation();
  const { exercisedata } = state;
  console.log(exercisedata);

  const [answers, setAnswers] = useState([]);
  const [speedReadingCalculation, setSpeedReadingCalculation] = useState('');
  const navigate = useNavigate();

  // Define your comprehension questions and answers here
  const questions = exercisedata?.content?.mcqs || [
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris',
    },
    {
      id: 2,
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Jupiter',
    },
    {
      id: 3,
      question: 'What is the powerhouse of the cell?',
      options: ['Nucleus', 'Mitochondria', 'Chloroplast', 'Ribosome'],
      answer: 'Mitochondria',
    },
    {
      id: 4,
      question: 'What is the largest mammal?',
      options: ['Elephant', 'Blue whale', 'Giraffe', 'Hippopotamus'],
      answer: 'Blue whale',
    }
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
