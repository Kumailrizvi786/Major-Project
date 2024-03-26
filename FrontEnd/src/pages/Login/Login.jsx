import React from 'react';
import { Card, Text, Button } from '@radix-ui/themes';
import { SunIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Welcome back!</h2>
          <p className="mt-2 text-sm text-gray-500">Please sign in to your account</p>
        </div>
        <form className="mt-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              className="mt-1 w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500"
              id="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500"
              id="password"
              placeholder="Enter your password"
              autoComplete="current-password"
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
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
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
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
