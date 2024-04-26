import React, { useRef, useState } from 'react';
import { Card, Text, Box, Button, Heading } from '@radix-ui/themes';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { FiLogIn } from 'react-icons/fi';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { login } from "../../features/authSlice";
import { Spinner } from '@radix-ui/themes';
import { useDispatch } from "react-redux";
import Cookies from 'js-cookie'

// const api = axios.create({
//   baseURL: 'http://localhost:8080/user', // Replace with your backend API base URL
//   withCredentials: true
// });


function Login() {
  const navigate = useNavigate();
  const recaptcha = useRef();
  const dispatch = useDispatch();
  const [captchaToken, setCaptchaToken] = useState('');
  const [loading, setloading] = useState(false);
  const [data, setData] = useState({ email: '', password: '' });

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleChange = (e) => {
    console.log(e.target.id, e.target.value);
    setData({ ...data, [e.target.id]: e.target.value });
  }

  console.log(loading)
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!captchaToken) {
      toast.error('Please complete the reCAPTCHA verification.');
      return;
    }
    if (!data.email || !data.password) {
      toast.error('All fields are required');
      return;
    }

    console.log(data)

    try {
      setloading("true")
      const response = await axios.post('http://localhost:8080/user/login', {
        email: data.email,
        password: data.password
      });

      console.log("Response Data: ",response.data);
      // console.log(response.status);
      // Handle response from server
      if (response.status === 200) {
        const token = response.data.token;
        const options = {
          expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
          httpOnly: true,
          SameSite: 'None',
          secure: true,
        };
        //if setting in localStorage then set cookie is not required
        // const setCookie = Cookies.set('token', token, options)
        // console.log("Cookies set " + setCookie);
        if (!token) {
          console.log('Token not found ');
        }
        // const { userEmail } = response.data;
        const payload = {
          user: response.data,
          token: token,
          role: 'user'
        };

        // Login successful, redirect or perform necessary actions
        //setting token in local storage
        localStorage.setItem('token', token);
        dispatch(login(payload));
        console.log('User Login successful');
        toast.success('User Login successful');
        navigate('/profile');
        // clear form
        setData({ email: '', password: '' });
        setloading(false)

      } else {
        // Login failed, display error message
        console.error('Login failed');
        setloading(false)
        console.error('Error:', response.data);
        toast.error('Login failed: ' + response.data.message);

      }

    } catch (error) {
      console.error('Error:', error);
      setloading(false)
      toast.error('Unable to Login due to ' + error.message);
    }

    // clear form



  };
  return (
    <div className="flex justify-center items-center mt-8 mb-4">
      <Box className="max-w-sm w-full px-6 py-8 rounded-lg" style={{ boxShadow: 'var(--shadow-4)', borderRadius: 'var(--radius-3)' }}>
        <div className="text-center">
          <Heading as="h2">Login your Account !</Heading>
          <p className="mt-2 text-sm text-gray-500 mb-4">Please sign in to your account</p>
        </div>
        {/* <div className="mb-4 text-center space-y-2 ml-3">
          <Button color="gray" className="flex items-center cursor-pointer px-16 py-5" variant="outline">
            <FaGithub className="mr-2 cursor-pointer" />
            Continue with GitHub
          </Button>
          <Button color="red" className="flex items-center  cursor-pointer px-16 py-5" variant="outline">
            <FaGoogle className="mr-2 cursor-pointer" />
            Continue with Google
          </Button>
        </div> */}

{/* 
        <div className="flex items-center justify-center mb-4 space-x-4">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="text-gray-500">OR</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div> */}
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
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-4 ml-4">
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
              onChange={handleCaptchaChange}
            />
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
            <Button type="submit" variant="surface" className="w-full cursor-pointer" disabled={loading}>
              Log in {loading ? <Spinner /> : ""}
            </Button>
          </div>
        </form>
      </Box>
    </div>
  );
}

export default Login;
