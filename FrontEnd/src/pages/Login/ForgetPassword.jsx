import React from 'react';
import { Box, Button, Heading } from '@radix-ui/themes';

function ForgetPassword() {
  return (
    <div className="flex justify-center items-center mt-8">
      <Box className="max-w-sm w-full px-6 py-8 rounded-lg" style={{ boxShadow: 'var(--shadow-4)', borderRadius: 'var(--radius-3)' }}>
        <div className="text-center">
          <Heading as="h2">Forgot Your Password?</Heading>
          <p className="mt-2 text-sm text-gray-500">Don't worry, it happens to the best of us! Please enter your email address below and we'll send you a reset link.</p>
        </div>
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
            <Button type="submit" variant="surface" className="w-full">
              Reset Password
            </Button>
          </div>
        </form>
      </Box>
    </div>
  );
}

export default ForgetPassword;
