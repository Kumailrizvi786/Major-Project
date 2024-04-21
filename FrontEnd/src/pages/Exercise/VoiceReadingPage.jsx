import React, { useState, useEffect } from 'react';
import { Badge, Button, Callout, Card, Heading } from '@radix-ui/themes';
import { Text } from '@radix-ui/themes';
import { FaMicrophone } from 'react-icons/fa';
import { tw } from 'twind';
import Breadcrumbs from '../../components/Breadcrumb';
import { IoHomeOutline } from 'react-icons/io5';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import ResultPage from './VoiceReading/VoiceResult';

function VoiceReadingPage() {
  const Breadcrumbitems = [
    { href: '/', label: 'Home' },
    { href: '/exercise', label: 'Exercise' },
    { href: '/exercise/voicereading', label: 'Voice Reading' },
  ];
  const [originalText, setOriginalText] = useState(''); // State to store the original text
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // State to track the current word index
  const [mistakes, setMistakes] = useState([]); // State to store mistakes
  const [isListening, setIsListening] = useState(false);
  const [showResult, setShowResult] = useState(false); // State to control result display
  const recognitionRef = React.useRef(null);

  useEffect(() => {
    // Simulated original content
    const sampleText =
      'This sample text for voice model Please read this text out voice reading';
    setOriginalText(sampleText);
  }, []);

  useEffect(() => {
    if (isListening) {
      recognitionRef.current = new window.webkitSpeechRecognition();
      recognitionRef.current.lang = 'en-US';
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript.trim();
        const currentWord = originalText.split(' ')[currentWordIndex];

        if (transcript.toLowerCase().includes(currentWord.toLowerCase())) {
          // Move to the next word if the current word is recognized in the transcript
          setCurrentWordIndex((prevIndex) => prevIndex + 1);
        } else {
          // Add mistake to the list if the word is not recognized correctly
          setMistakes((prevMistakes) => [...prevMistakes, currentWord]);
        }

        // Restart recognition if all words have been spoken
        if (currentWordIndex === originalText.split(' ').length - 1) {
          setCurrentWordIndex(0);
          setShowResult(true); // Show the result page when the exercise is finished
        }
      };

      recognitionRef.current.onend = () => {
        // Restart recognition if it's still enabled
        if (isListening) {
          recognitionRef.current.start();
        }
      };

      recognitionRef.current.start(); // Start recognition
    }
  }, [isListening, currentWordIndex, originalText, mistakes]);

  const handleSpeechRecognition = () => {
    setIsListening(true);
  };

  const handleStopRecognition = () => {
    setIsListening(false);
    recognitionRef.current.stop();
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  const handleRestart = () => {
    setShowResult(false); // Reset showResult state to false
    setCurrentWordIndex(0); // Reset currentWordIndex
    setMistakes([]); // Clear mistakes
  };

  if (showResult) {
    return (
      <ResultPage
        originalText={originalText}
        mistakes={mistakes}
        handleRestart={handleRestart}
      />
    );
  }

  return (
    <div className={tw`max-w-4xl mx-auto px-4 py-8`}>
      <Heading as="h1" className={tw`text-3xl font-bold mb-8`}>
        Voice Reading Exercise
      </Heading>
      <Breadcrumbs items={Breadcrumbitems} icon={IoHomeOutline} />
      <Callout.Root className="mb-2">
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text>Read the following text out loud</Callout.Text>
      </Callout.Root>

      <Card className={tw`p-6 mb-8`}>
        <Text>
          {originalText.split(' ').map((word, index) => (
            <span
              key={index}
              className={tw`font-semibold`}
              style={{
                backgroundColor: currentWordIndex === index ? '	#8cff32' : 'transparent',
                padding: '2px',
                // borderRadius: '3px',
              }}
            >
              {word}{' '}
            </span>
          ))}
        </Text>
      </Card>
      <div>
        <strong>Mistakes:</strong>{' '}
        {mistakes.length > 0 ? (
          <Badge color="red">{mistakes.join(', ')}</Badge>
        ) : (
          <span>No mistakes</span>
        )}
      </div>
      <div className={tw`flex items-center space-x-4 mt-4`}>
        <Button
          onClick={handleSpeechRecognition}
          disabled={isListening}
          className={tw`flex items-center space-x-1`}
        >
          <FaMicrophone className={tw`${isListening && 'animate-pulse'}`} />
          <span>{isListening ? 'Listening...' : 'Start Reciting'}</span>
        </Button>
        {isListening && (
          <Button onClick={handleStopRecognition} className={tw`flex items-center space-x-1`}>
            Stop Reciting
          </Button>
        )}
      </div>
    </div>
  );
}

export default VoiceReadingPage;
