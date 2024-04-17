import toast, { Toaster } from "react-hot-toast";
import { Outlet, useNavigate } from 'react-router-dom';
import { Theme } from '@radix-ui/themes';
import Navbar from './components/Navbar';
import SliderBar from './components/Slidebar';
import '@radix-ui/themes/styles.css';
import { useEffect } from "react";
import getUser from "./utils/helper";
import Login from "./pages/Login";

export default function App() {
  const navigate = useNavigate();
  useEffect (() => {  
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigate('/login');
    }
  }
  , []);

  return (
    <>
    <Theme>
      {getUser() ? <> <SliderBar  />  
      <Outlet/>
      <Toaster/></> : <Login/>}
     
    </Theme>
    </>
  );
}
