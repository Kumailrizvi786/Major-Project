import '@radix-ui/themes/styles.css';
import Header from './components/Header';
// import {Badge} from '@radix-ui/themes/src/components';
import MyApp from './components/MyApp';
import { Theme } from '@radix-ui/themes';
import Tables from './components/Tables';
import Hero from './components/Hero';
import Tab from './components/Tab';
import Search from './components/Search';
import { useState } from 'react';
import Skeletons from './components/Skeletons';
import Nav from './components/Nav';
import Login from './pages/Login/Login';
import toast, { Toaster } from "react-hot-toast";
import Signup from './pages/Signup/Signup';
import Test from './components/Test';
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
  {/* <Header/> */}
  <Nav onThemeChange={toggleTheme} />
  {/* <Tab/> */}
  {/* <Search/> */}
  {/* <Skeletons/> */}
  <Hero/>
  <Login/>
  {/* <Test/> */}
  <Signup/>
  < Tables/>
  <MyApp />
  <Toaster/>
</Theme>
      
   </>
  )
}