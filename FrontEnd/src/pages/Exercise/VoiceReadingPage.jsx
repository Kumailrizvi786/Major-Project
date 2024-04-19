import React, { useState, useEffect } from 'react';
import { Button, Heading } from '@radix-ui/themes';
import { tw } from 'twind';
import { FaMicrophone } from 'react-icons/fa';

function VoiceReadingPage() {
  const [originalText, setOriginalText] = useState(''); // State to store the original text
  const [transcribedText, setTranscribedText] = useState(''); // State to store the transcribed text
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = React.useRef(null);

  useEffect(() => {
    // Simulated original content
    const sampleText = 'This is a sample text for voice reading exercise.';
    setOriginalText(sampleText);
    setTranscribedText(sampleText); // Start with original text as the transcription

    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.lang = 'en-US';
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;

    recognitionRef.current.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      setTranscribedText(transcript);
    };
  }, []);

  const handleSpeechRecognition = () => {
    recognitionRef.current.start();
    setIsListening(true);
  };

  const handleStopListening = () => {
    recognitionRef.current.stop();
    setIsListening(false);
  };

  // Function to determine the highlight color based on correctness
  const highlightColor = (word) => {
    if (transcribedText.includes(word)) {
      return originalText.includes(word) ? 'green' : 'red'; // Green for correct, red for incorrect
    }
    return ''; // No highlight if the word is not part of the transcription
  };

  // Split the original text into words and create span elements with appropriate highlighting
  const formattedText = originalText.split(' ').map((word, index) => (
    <span key={index} style={{ backgroundColor: highlightColor(word), padding: '2px' }}>{word} </span>
  ));

  return (
    <div className={tw`max-w-4xl mx-auto px-4 py-8`}>
      <Heading as="h1" className={tw`text-3xl font-bold mb-8`}>
        Voice Reading Exercise
      </Heading>
      <div>
        {formattedText}
      </div>
      <div className={tw`flex items-center space-x-4 mt-4`}>
        <Button
          onClick={handleSpeechRecognition}
          disabled={isListening}
          className={tw`flex items-center space-x-1`}
        >
          <FaMicrophone className={tw`${isListening && 'animate-pulse'}`} />
          <span>{isListening ? 'Listening...' : 'Start Speech Reading'}</span>
        </Button>
        {isListening && (
          <Button onClick={handleStopListening} variant="ghost" className={tw`text-red-600`}>
            Stop
          </Button>
        )}
      </div>
    </div>
  );
}

export default VoiceReadingPage;
