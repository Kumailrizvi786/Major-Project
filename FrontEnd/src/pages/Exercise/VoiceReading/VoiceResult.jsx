import React from 'react';
import { Badge, Button, Card, Heading } from '@radix-ui/themes';
import { Text } from '@radix-ui/themes';
import { tw } from 'twind';
import { IoHomeOutline } from 'react-icons/io5';
import Breadcrumbs from '../../../components/Breadcrumb';


function VoiceResult({ originalText, mistakes, handleRestart }) {
  const accuracy = ((originalText.split(' ').length - mistakes.length) / originalText.split(' ').length) * 100;

  return (
    <div className={tw`max-w-4xl mx-auto px-4 py-8`}>
      <Heading as="h1" className={tw`text-3xl font-bold mb-8`}>
        Voice Reading Result
      </Heading>
      <Breadcrumbs
        items={[
          { href: '/', label: 'Home' },
          { href: '/exercise', label: 'Exercise' },
          { href: '/exercise/voicereading', label: 'Voice Reading' },
          { href: '/exercise/voicereading/result', label: 'Result' },
        ]}
        icon={IoHomeOutline}
      />

      <Card className={tw`p-6 mb-8`}>
        <Heading as="h2" className={tw`text-xl font-bold mb-4`}>
          Original Text
        </Heading>
        <Text>{originalText}</Text>
      </Card>

      <Card className={tw`p-6 mb-8`}>
        <Heading as="h2" className={tw`text-xl font-bold mb-4`}>
          Performance
        </Heading>
        <div>
          <strong>Accuracy:</strong> {accuracy.toFixed(2)}%
        </div>
        <div>
          <strong>Mistakes:</strong>{' '}
          {mistakes.length > 0 ? (
            <Badge color="red">{mistakes.join(', ')}</Badge>
          ) : (
            <span>No mistakes</span>
          )}
        </div>
      </Card>

      <div className={tw`flex justify-center`}>
        <Button onClick={handleRestart} className={tw`flex items-center space-x-1`}>
          Restart Exercise
        </Button>
      </div>
    </div>
  );
}

export default VoiceResult;
