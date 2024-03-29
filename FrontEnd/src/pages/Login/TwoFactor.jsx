import React from 'react';
import { Box, Button, Heading } from '@radix-ui/themes';

function TwoFactor() {
  return (
    <div className="flex justify-center items-center mt-8">
      <Box className="max-w-sm w-full px-6 py-8 rounded-lg" style={{ boxShadow: 'var(--shadow-4)', borderRadius: 'var(--radius-3)' }}>
        <div className="text-center">
          <Heading as="h2">Two-Factor Authentication</Heading>
          <p className="mt-2 text-sm text-gray-500">Please enter the verification code sent to your device.</p>
        </div>
        <form className="mt-6">
          <div>
            <label htmlFor="verification-code" className="block text-sm font-medium text-gray-500">
              Verification Code
            </label>
            <input
              type="text"
              className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              id="verification-code"
              placeholder="Enter verification code"
              autoComplete="off"
              required
            />
          </div>
          <div className="mt-6">
            <Button type="submit" variant="surface" className="w-full cursor-pointer">
              Verify
            </Button>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <p>
              Didn't receive the code? <a href="#" className="font-medium text-blue-500 hover:underline">Resend</a>
            </p>
          </div>
        </form>
      </Box>
    </div>
  );
}

export default TwoFactor;
