import React, { useState, useEffect } from 'react';
import { Button, TextArea, Heading } from '@radix-ui/themes';
import { tw } from 'twind';
import { FaMicrophone } from 'react-icons/fa';

function VoiceReadingPage() {
  const [transcribedText, setTranscribedText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = React.useRef(null);

  useEffect(() => {
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.lang = 'en-US';

    recognitionRef.current.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
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

  return (
    <div className={tw`max-w-4xl mx-auto px-4 py-8`}>
      <Heading as="h1" className={tw`text-3xl font-bold mb-8`}>
        Voice Reading Exercise
      </Heading>
      <TextArea
        className={tw`h-40 resize-none`}
        value={transcribedText}
        readOnly
        placeholder="Start speaking..."
        onChange={(event) => setTranscribedText(event.target.value)}
      />
      <div className={tw`flex items-center space-x-4 mt-4`}>
        <Button
          onClick={handleSpeechRecognition}
          disabled={isListening}
          className={tw`flex items-center space-x-1`}
        >
          <FaMicrophone className={tw`${isListening && 'animate-pulse'}`} />
          <span>{isListening ? 'Listening...' : 'Speak'}</span>
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
