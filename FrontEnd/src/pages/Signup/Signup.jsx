import React from 'react';
import { Box, Button, Card, Heading } from '@radix-ui/themes';
import { FaSign, FaGithub, FaGoogle } from 'react-icons/fa';

function Signup() {
  return (
    <div className="flex justify-center items-center mt-8">
      <Box className="max-w-sm w-full px-6 py-6 rounded-lg" style={{ boxShadow: 'var(--shadow-4)', borderRadius: 'var(--radius-3)' }}>
        <div className="text-center">
          <Heading as='h2'>Create an account</Heading>
          <p className="mt-2 text-sm text-gray-500">Sign up to get started</p>
        </div>

        <form className="mt-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-500">
              Name
            </label>
            <input
              type="text"
              className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              id="name"
              placeholder="Enter your name"
              autoComplete="name"
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-500">
              Email Address
            </label>
            <input
              type="email"
              className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              id="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-500">
              Password
            </label>
            <input
              type="password"
              className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              id="password"
              placeholder="Enter your password"
              autoComplete="new-password"
              required
            />
          </div>
          <div className="mt-6">
            <Button color="indigo" type="submit" variant="outline" className="w-full">
              Sign up <FaSign />
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-600 text-center">
            By signing up, you agree to our <a href="#" className="font-medium text-blue-500 hover:underline">terms of service</a> and <a href="#" className="font-medium text-blue-500 hover:underline">privacy policy</a>.
          </p>
        </form>
      </Box>

      {/* OR Section */}
      {/* <Card className="max-w-sm w-full px-6 py-6 rounded-lg ml-4" style={{ boxShadow: 'var(--shadow-4)', borderRadius: 'var(--radius-3)' }}>
        <div className="text-center">
          <Heading as='h2'>OR</Heading>
          <p className="mt-2 text-sm text-gray-500">Sign up with your social account</p>
        </div>
        <div className="mt-6 flex justify-center items-center space-x-4">
          <Button variant="ghost" className="flex items-center">
            Sign up with GitHub <FaGithub className="ml-2" />
          </Button>
          <Button variant="ghost" className="flex items-center">
            Sign up with Google <FaGoogle className="ml-2" />
          </Button>
        </div>
      </Card> */}
    </div>
  );
}

export default Signup;
