import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { LockClosedIcon as Lock } from '@radix-ui/react-icons';
import { Heading, Button, Theme } from '@radix-ui/themes';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    toast.success('Password reset link sent to your email!');
    // Add your logic to send password reset link to the provided email address
    console.log('Sending password reset link to:', email);
  };

  return (
    <Theme>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 w-96">
        <div className="text-center mb-6">
          <Lock className="h-12 w-12 text-indigo-500 mx-auto" />
          <Heading size="2" className="text-xl font-bold text-gray-800">Forgot Password</Heading>
        </div>
        <form onSubmit={handleForgotPassword}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <Button 
                type="submit" 
                className="w-full cursor-pointer "
            >

              Send Reset Password Link 
            </Button>

            
          </div>
        </form>
      </div>
    </div>
    </Theme>
  );
};

export default ForgotPassword;
