import React, { useState } from 'react';
import { Box, Button, Heading } from '@radix-ui/themes';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Spinner } from '@radix-ui/themes';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  console.log('Signup render');
  const [loading , setLoading] = useState(false);
  const [data, setData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    console.log(e.target.id, e.target.value);
    setData({ ...data, [e.target.id]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    if (!data.name || !data.email || !data.password) {
      toast.error('All fields are required');
      return;
    }

    
    // Perform form validation
    // Perform API call to create a new account
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8080/user/register', {
        name: data.name,
        email: data.email,
        password: data.password,
        role: 'user' // setting role to user statically
      });
      
      console.log(response.data);
      console.log(response.status);
  
      // Handle response from server
      if (response.status === 200) {
        // Login successful, redirect or perform necessary actions
        console.log('User Register successful');
        toast.success('User Register successful');
        navigate("/login");
        // clear form
        setData({ name: '', email: '', password: '' });
        // redirect to login page
        // window.location.href = '/login';
      } else {
        // Login failed, display error message
        console.error('Register failed');
        console.error('Error', response.data);
        toast.error('Register failed: ' + response.data.message);
      }
    } catch (error) {
      // Login failed, display error message
      console.error('Error:', error);
      toast.error('Unable to SignUp due to ' + error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center mt-8 mb-4">
      <Box className="max-w-sm w-full px-6 py-6 rounded-lg" style={{ boxShadow: 'var(--shadow-4)', borderRadius: 'var(--radius-3)' }}>
        <div className="text-center mb-4">
          <Heading as='h2'>Create an account</Heading>
          <p className="mt-2 text-sm text-gray-500">Sign up to get started</p>
        </div>
       
        <div className="mb-4 text-center space-y-2 ml-3">
  {/* <Button color="gray" className="flex items-center cursor-pointer px-16 py-5" variant="outline">
    <FaGithub className="mr-2 cursor-pointer" />
    Continue with GitHub
  </Button> */}
  {/* <Button color="red" className="flex items-center cursor-pointer px-16 py-5" variant="outline">
    <FaGoogle className="mr-2 cursor-pointer" />
    Continue with Google
  </Button> */}
</div>


        <div className="flex items-center justify-center mb-4 space-x-4">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="text-gray-500">Sign Up</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>
        <form>
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
              value={data.name}
              onChange={handleChange}
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
              value={data.email}
              onChange={handleChange}
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
              value={data.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-6">
            <Button color="indigo" onClick={handleSubmit} variant="outline" className="w-full cursor-pointer" disabled={loading}>
              Continue to Create Account {loading? <Spinner /> : ''}
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-600 text-center">
            By signing up, you agree to our <a href="#" className="font-medium text-blue-500 hover:underline">terms of service</a> and <a href="#" className="font-medium text-blue-500 hover:underline">privacy policy</a>.
          </p>
        </form>
      </Box>
    </div>
  );
}

export default Signup;
