import toast, { Toaster } from "react-hot-toast";
import { Outlet } from 'react-router-dom';
import { Theme } from '@radix-ui/themes';
import Navbar from './components/Navbar';
import SliderBar from './components/Slidebar';
import '@radix-ui/themes/styles.css';

export default function App() {
  return (
    <>
    <Theme>
      <SliderBar  />  
      <Outlet/>
      <Toaster/>
    </Theme>
    </>
  );
}
