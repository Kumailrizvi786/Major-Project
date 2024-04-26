import React from 'react';
import { Box, Card,Badge, Inset, Text, Strong, Heading } from '@radix-ui/themes';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="container mx-auto px-4 py-8 mt-6 mb-8">
      {/* inlcuding badge */}
      <div className="flex justify-center items-center cursor-pointer mb-2">
  <Link to="/exercise" className="flex items-center space-x-1" color="gray">
    <Badge size={"3"} className="relative">  Practice with Generative AI  
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
      </svg>
      <span class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
    </Badge>
  </Link>
</div>



      <Heading size="9"  color="black" className="text-center">
      Enhance your <span className="text-[#3859C7]">reading speed</span> with RFS
    </Heading>
      <Heading size="7" className="text-center mb-8">
        We provide different features to enhance the reading speed and improve your comprehension.
      </Heading>
      <div className="flex justify-center mt-8">
        <div className="max-w-xs mx-4">
          <Card size="2">
            <Inset clip="border-box" side="top" pb="current">
              <img
                src="/img/img1.jpg"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: 140,
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            </Inset>
            <Text as="p" size="3" className="px-4 py-2">
              <Strong>Interactive Exercises: </Strong>Fun and personalized activities that feel like real reading situations to help users get better and remember what they've learned.
            </Text>
          </Card>
        </div>
        <div className="max-w-xs mx-4">
          <Card size="2">
            <Inset clip="border-box" side="top" pb="current">
              <img
                src="/img/img2.jpg"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: 140,
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            </Inset>
            <Text as="p" size="3" className="px-4 py-2">
              <Strong>Adaptive Learning: </Strong>Changes the difficulty of reading materials as users get better, so they're always challenged just enough to keep learning.
            </Text>
          </Card>
        </div>
        <div className="max-w-xs mx-4">
          <Card size="2">
            <Inset clip="border-box" side="top" pb="current">
              <img
                src="img/img3.jpg"
                alt="Bold typography"
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  width: '100%',
                  height: 140,
                  backgroundColor: 'var(--gray-5)',
                }}
              />
            </Inset>
            <Text as="p" size="3" className="px-4 py-2">
              <Strong>Personalized Learning Paths: </Strong>Customized reading plans and activities tailored to each user's likes and how well they're doing to help them learn better.
            </Text>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Hero;
