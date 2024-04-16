import React, { useState } from 'react';
import toast from 'react-hot-toast';
// lock icon from react-icons
import { LockClosedIcon as Lock } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import { Button, Theme } from '@radix-ui/themes';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();
    toast.error('Login logic not implemented yet!');
    // Add your login logic here
    console.log('Logging in with:', email, password);
  };
  
  return (
    <Theme>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 w-96">
        <div className="text-center mb-6">
        <Lock className="h-12 w-12 text-indigo-500 mx-auto" />
          <h2 className="text-xl font-bold text-gray-800">Admin Login</h2>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input 
              type="password" 
              id="password" 
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <Button 
               className='w-half cursor-pointer'
              // className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </Button>
            <Link to="/forgetpassword" className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-800" href="#">
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
    </Theme>
  );
};

export default Login;
