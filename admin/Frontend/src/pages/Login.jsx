import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
// lock icon from react-icons
import { useNavigate } from 'react-router-dom';
import { LockClosedIcon as Lock } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import { Button, Theme } from '@radix-ui/themes';
import axios from 'axios';
const Login = () => {

  const navigate = useNavigate();
  useEffect(() => { 
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      navigate('/');
    }
  }, []);
  const [userDatas, setUserDatas] = useState({ email: '', password: '' });
  const [data, setData] = useState({ email: '', password: '' });
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const [loading, setloading] = useState(false);
  const handleChange = (e) => {
    console.log(e.target.id, e.target.value);
    setData({ ...data, [e.target.id]: e.target.value });
  }
  
  const handleLogin = async (event) => {
    event.preventDefault();
    
    if (!data.email || !data.password) {
      toast.error('All fields are required');
      return;
    }

    console.log(data)

    try {
      setloading("true")
      const response = await axios.post('http://localhost:8000/admin/login', {
        email: data.email,
        password: data.password
      });

      console.log("Response Data: ",response.data);
      
      setUserDatas(response.data)
      // setuser data in local storage
      localStorage.setItem('user', JSON.stringify(response.data));
      if (response.status === 200) {
    
        console.log('User Login successful');
        toast.success('User Login successful');
        navigate('/');

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
      toast.error('Unable to Login due to ' + error.response.data.message );
    }

    // clear form



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
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Email address"
            
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input 
              type="password" 
              id="password" 
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Password"
             
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <Button 
               className='w-full cursor-pointer'
              // className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </Button>
            {/* <Link to="/forgetpassword" className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-800" href="#">
              Forgot Password?
            </Link> */}
          </div>
        </form>
      </div>
    </div>
    <Toaster />
    </Theme>
  );
};

export default Login;
