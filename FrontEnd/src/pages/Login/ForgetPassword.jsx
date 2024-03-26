import React from 'react';
import { Box, Button, Heading } from '@radix-ui/themes';
import { IoInformationCircle } from 'react-icons/io5';
import { FaArrowRight } from 'react-icons/fa';

const ForgetPassword = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <Box className="max-w-md bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <IoInformationCircle className="w-6 h-6 mr-2 text-blue-500" />
            <Heading as="h1" className="text-lg font-semibold text-gray-800">Forgot Your Password?</Heading>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Don't worry, it happens to the best of us! Please enter your email address below and we'll send you a reset link.
          </p>
          <form className="mt-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-500">
                Email Address
              </label>
              <input
                type="email"
                className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                id="email"
                placeholder="Enter your email"
                autoComplete="off"
                required
              />
            </div>
            <div className="mt-6">
              <Button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Reset Password
                <FaArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </form>
        </div>
      </Box>
    </div>
  );
};

export default ForgetPassword;
