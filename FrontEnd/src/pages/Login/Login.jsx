import React from 'react';
import { Card, Text,Box, Button,Heading } from '@radix-ui/themes';
import { SunIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';

function Login() {
  return (
    <div className="flex justify-center items-center mt-8">
      <Box className="max-w-sm w-full px-6 py-8 rounded-lg" style={{boxShadow:'var(--shadow-4)', borderRadius: 'var(--radius-3)' }}>
        <div className="text-center">
          {/* <h2 className="text-2xl font-bold text-gray-800">Welcome back!</h2> */}
          <Heading as='h2'>Welcome back!</Heading>
          <p className="mt-2 text-sm text-gray-500">Please sign in to your account</p>
        </div>
        <form className="mt-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-500">
              Email Address
            </label>
            <input
              type="email"
              className="mt-1 w-full px-3 py-2 rounded-lg  border border-gray-300 focus:outline-none focus:border-blue-500"
              id="email"
              placeholder="Enter your email"
              autoComplete="off"
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-500">
              Password
            </label>
            <input
              type="password"
              className="mt-1 w-full px-3 py-2 rounded-lg  border border-gray-300 focus:outline-none focus:border-blue-500"
              id="password"
              placeholder="Enter your password"
              autoComplete="off"
              required
            />
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                className="w-4 h-4 text-blue-500 rounded focus:ring-blue-400"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-500">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-500 hover:underline">
                Forgot your password?
              </a>
            </div>
          </div>
          <div className="mt-6">
            <Button type="submit" variant="surface" className="w-full">
              Log in
            </Button>
          </div>
        </form>
      </Box>
    </div>
  );
}

export default Login;
