import React, { useState } from 'react';
import { Button, Dialog, Heading, Text, Flex, Badge, Card } from '@radix-ui/themes';
import Breadcrumbs from '../../components/Breadcrumb';
import { IoHomeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import professionalImage from '/img/skimming/img1.jpg'; // Import the professional image here
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function SkimmingExercise() {
  const [showContent, setShowContent] = useState(false);
  const [showImage, setShowImage] = useState(true);
  const [timer, setTimer] = useState(10); // Timer for 10 seconds

  const handleStartSkimming = () => {
    setShowImage(true);
    setShowContent(false);
    setTimer(10); // Reset timer to 10 seconds
    // Start the countdown timer
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(countdown);
          setShowImage(false);
          setShowContent(true);
        }
        if (prevTimer === 0) {
          clearInterval(countdown);
          setShowImage(false);
          setShowContent(false);
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Skimming Exercise', href: '/skimming' },
        ]}
        icon={IoHomeOutline}
      />
      <Heading as="h1" className="text-3xl font-bold mb-8">
        Skimming Exercise
      </Heading>
<Card className="p-6 mb-8">
      <Dialog.Root>
        <Dialog.Trigger>
          <Button color='blue' variant='soft'>Show Instructions</Button>
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

      {showImage &&(
        <Dialog.Root>
             <Dialog.Trigger>
          <Button onClick={handleStartSkimming} variant="outline" color="cyan" className="mr-2">Start Skimming</Button>
        </Dialog.Trigger>
          <Dialog.Content>
            <div className=" p-6 mb-8 border border-gray-300 rounded-lg">
              <Badge size="3" color="gray" variant="outline" align={"center"}>
                <Heading as="h6" >Time remaining: {timer} seconds</Heading>
              </Badge>
                <Heading as="h2" className="flex justify-center text-lg font-bold mb-4">
                    Skim through the image below
                </Heading>
                <div className="flex justify-center">
              <img src={professionalImage} alt="Professional Image" style={{ maxWidth: '50%' }} />
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Root>
      )}


      {showContent && (
        <Link to="/comprehension">
          <Button className="mr-2">
            Next <FaRegArrowAltCircleRight />
          </Button>
        </Link>
      )}
    </Card>
    </div>

  );
}

export default SkimmingExercise;
