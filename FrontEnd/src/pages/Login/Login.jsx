import React, { useRef, useState } from 'react';
import { Card, Text, Box, Button, Heading } from '@radix-ui/themes';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import ReCAPTCHA from 'react-google-recaptcha';
// import React, { useState } from "react";
import { GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";

function Login() {
  const [captchaToken, setCaptchaToken] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Do something with the captchaToken, like sending it to the server for verification
    console.log('Captcha Token:', captchaToken);
  };

  const setTokenFunc = (getToken) => {
    setCaptchaToken(getToken);
  };

  return (
    <div className="flex justify-center items-center mt-8">
      <Box className="max-w-sm w-full px-6 py-8 rounded-lg" style={{ boxShadow: 'var(--shadow-4)', borderRadius: 'var(--radius-3)' }}>
        <div className="text-center">
          <Heading as="h2">Welcome back!</Heading>
          <p className="mt-2 text-sm text-gray-500">Please sign in to your account</p>
        </div>
        <form className="mt-6" onSubmit={handleSubmit}>
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
          <div className="mt-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-500">
              Password
            </label>
            <input
              type="password"
              className="mt-1 w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              id="password"
              placeholder="Enter your password"
              autoComplete="off"
              required
            />
          </div>
          <div className="mt-4 ml-4">
            <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY}>
              <GoogleReCaptcha
                onVerify={setTokenFunc}
              />
            </GoogleReCaptchaProvider>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="remember-me" className="w-4 h-4 text-blue-500 rounded focus:ring-blue-400" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-500">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link to="/forgetpassword" className="font-medium text-blue-500 hover:underline">
                Forgot your password?
              </Link>
            </div>
          </div>
          <div className="mt-6">
            <Button type="submit" variant="surface" className="w-full">
              Log in <FiLogIn />
            </Button>
          </div>
        </form>
      </Box>
    </div>
  );
}

export default Login;
