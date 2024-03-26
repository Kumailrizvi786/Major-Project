import '@radix-ui/themes/styles.css';
import MyApp from './components/MyApp';
import { Theme } from '@radix-ui/themes';
import Tables from './components/Tables';
import Hero from './components/Hero';
import { useState } from 'react';
import Nav from './components/Nav';
import Login from './pages/Login/Login';
import toast, { Toaster } from "react-hot-toast";
import Signup from './pages/Signup/Signup';
import HowItWork from './components/HowItwork';


// badge import



export default function App() {
  const [themeMode, setThemeMode] = useState("light");
  const toggleTheme = () => {
     toast.success('Theme Changed Successfully');
    setThemeMode(prevMode => prevMode === "light" ? "dark" : "light");
  };
  return (
<>
<Theme appearance={themeMode}>
  <Nav onThemeChange={toggleTheme} />
  <Hero/>
  < Tables/>
  {/* <HowItWork/> */}
  <MyApp />
  <Toaster/>
</Theme>
      
   </>
  )
}