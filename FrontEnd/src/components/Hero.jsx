import React from 'react';
import { Box, Card, Inset, Text, Strong, Heading } from '@radix-ui/themes';

function Hero() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Heading size="9" className="text-center ">
        Enhance your reading speed with RFS
      </Heading>
      <Heading size="7" className="text-center mb-8">
        We provide different features to enhance the reading speed and improve your comprehension.
      </Heading>
      <div className="flex justify-center">
        <div className="max-w-xs mx-4">
          <Card size="2">
            <Inset clip="border-box" side="top" pb="current">
              <img
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
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
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
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
                src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
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
