import React, { useState, useEffect } from 'react';
import { Badge, Button, Card, Heading } from '@radix-ui/themes';
import { Text } from '@radix-ui/themes';
import { FaMicrophone } from 'react-icons/fa';
import { tw } from 'twind';

function VoiceReadingPage() {
  const [originalText, setOriginalText] = useState(''); // State to store the original text
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // State to track the current word index
  const [mistakes, setMistakes] = useState([]); // State to store mistakes
  const [isListening, setIsListening] = useState(false);
  const [showResult, setShowResult] = useState(false); // State to control result display
  const recognitionRef = React.useRef(null);

  useEffect(() => {
    // Simulated original content
    const sampleText =
      'This is a sample text for voice reading exercise. Please read this text out loud to practice voice reading. Good luck! Have fun! Enjoy!';
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

        if (transcript.toLowerCase() === currentWord.toLowerCase()) {
          // Move to the next word if the word is spoken correctly
          setCurrentWordIndex(currentWordIndex + 1);
        } else {
          // Add mistake to the list if the word is spoken incorrectly
          setMistakes([...mistakes, currentWord]);
          // Do not move to the next word if a mistake is made
          return;
        }
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current.start(currentWordIndex); // Start recognition from the current word index
    }
  }, [isListening, currentWordIndex, originalText, mistakes]);

  const handleSpeechRecognition = () => {
    setIsListening(true);
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  return (
    <div className={tw`max-w-4xl mx-auto px-4 py-8`}>
      <Heading as="h1" className={tw`text-3xl font-bold mb-8`}>
        Voice Reading Exercise
      </Heading>
      <Card className={tw`p-6 mb-8`}>
        <Text>
          {originalText.split(' ').map((word, index) => (
            <Text
              key={index}
              className={tw`font-semibold ${
                currentWordIndex === index ? 'text-green-600' : 'text-gray-600'
              }`}
            >
              {word}{' '}
            </Text>
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
      {showResult ? (
        <Button className={tw`mt-4`} onClick={handleShowResult}>
          Show Result
        </Button>
      ) : (
        <div className={tw`flex items-center space-x-4 mt-4`}>
          <Button
            onClick={handleSpeechRecognition}
            disabled={isListening}
            className={tw`flex items-center space-x-1`}
          >
            <FaMicrophone className={tw`${isListening && 'animate-pulse'}`} />
            <span>{isListening ? 'Listening...' : 'Start Reciting'}</span>
          </Button>
        </div>
      )}
    </div>
  );
}

export default VoiceReadingPage;
