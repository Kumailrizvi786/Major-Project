import React, { useState } from 'react';
import { Button, Dialog, Heading, Text, TextField, Flex } from '@radix-ui/themes';
import Breadcrumbs from '../../components/Breadcrumb';
import { IoHomeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function SkimmingExercise() {
  const [showContent, setShowContent] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const handleStartSkimming = () => {
    setShowImage(true);
    setShowContent(false);
    // Scroll to the top of the content for better skimming experience
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Skimming Exercise' , href: '/skimming'},
        ]}
        icon={IoHomeOutline}
      />
      <Heading as="h1" className="text-3xl font-bold mb-8">
        Skimming Exercise
      </Heading>

      <Dialog.Root>
        <Dialog.Trigger>
          <Button>Show Instructions</Button>
        </Dialog.Trigger>

        <Dialog.Content>
          <Heading as="h2" className="text-lg font-bold mb-4">
            Instructions
          </Heading>
          <Text size="2" mb="4">
            Skim through the image that will be shown for 10 seconds. Try to get a general idea of its content.
            After 10 seconds, a comprehension question related to the image will be asked.
          </Text>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Close
              </Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>

      {showImage && (
        <div className="p-6 mb-8 border border-gray-300 rounded-lg">
          <p>Display image here...</p>
          {/* You can add image component here */}
        </div>
      )}

      {!showContent && !showImage && (
        <Button onClick={handleStartSkimming} className="mr-2">
          Start Skimming
        </Button>
      )}

      {showContent && (
        <Link to="/skimming-comprehension">
          <Button className="mr-2">
            Next <IoHomeOutline />
          </Button>
        </Link>
      )}
    </div>
  );
}

export default SkimmingExercise;
