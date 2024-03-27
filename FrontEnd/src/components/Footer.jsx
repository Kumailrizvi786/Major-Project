import React from 'react';
import { Box, Container, Heading, Text, Link,Separator  } from '@radix-ui/themes';

const Footer = () => {
  return (
    <Box as="footer" bg="gray" className="mt-8" py="10">
      <Separator size="4" className='mb-6' />
      <Container size="7"  >
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Heading as="h3" fontSize="lg" mb="4">About Us</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </div>
          <div>
            <Heading as="h3" fontSize="lg" mb="4">Explore</Heading>
            <ul>
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Services</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>
          <div>
            <Heading as="h3" fontSize="lg" mb="4">Connect</Heading>
            <ul>
              <li><Link href="#">Facebook</Link></li>
              <li><Link href="#">Twitter</Link></li>
              <li><Link href="#">Instagram</Link></li>
              <li><Link href="#">LinkedIn</Link></li>
            </ul>
          </div>
          <div>
            <Heading as="h3" fontSize="lg" mb="4">Contact Us</Heading>
            <Text>Lucknow,Uttar Pradesh, India</Text>
            <Text>Email: sahilali88084667@gmail.com</Text>
            <Text>Phone: 6393500494</Text>
          </div>
        </Box>
        <Box mt="8" textAlign="center" className='mb-4 text-center'>
          <Text>&copy; {new Date().getFullYear()} Read For Speed. All rights reserved.</Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
