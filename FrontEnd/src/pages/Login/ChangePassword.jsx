import React from 'react';
import { Box, Button, Heading } from '@radix-ui/themes';

function ChangePassword() {
  return (
    <div className="flex justify-center items-center mt-8">
      <Box className="max-w-sm w-full px-6 py-8 rounded-lg" style={{ boxShadow: 'var(--shadow-4)', borderRadius: 'var(--radius-3)' }}>
        <div className="text-center">
          <Heading as="h2">Change Password</Heading>
          <p className="mt-2 text-sm text-gray-500">Please enter your current password and your new password below.</p>
        </div>
        <form className="mt-6">
          <div>
            <label htmlFor="current-password" className="block text-sm font-medium text-gray-500">
              Current Password
            </label>
            <input
              type="password"
              className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              id="current-password"
              placeholder="Enter your current password"
              autoComplete="off"
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="new-password" className="block text-sm font-medium text-gray-500">
              New Password
            </label>
            <input
              type="password"
              className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              id="new-password"
              placeholder="Enter your new password"
              autoComplete="off"
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-500">
              Confirm New Password
            </label>
            <input
              type="password"
              className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              id="confirm-password"
              placeholder="Confirm your new password"
              autoComplete="off"
              required
            />
          </div>
          <div className="mt-6">
            <Button type="submit" variant="surface" className="w-full cursor-pointer">
              Change Password
            </Button>
          </div>
        </form>
      </Box>
    </div>
  );
}

export default ChangePassword;
