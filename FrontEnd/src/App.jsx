import '@radix-ui/themes/styles.css';
import MyApp from './components/MyApp';
import Tables from './components/Tables';
import Hero from './components/Hero';
import { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";



// badge import



export default function App() {
  const [themeMode, setThemeMode] = useState("light");
  const toggleTheme = () => {
     toast.success('Theme Changed Successfully');
    setThemeMode(prevMode => prevMode === "light" ? "dark" : "light");
  };
  return (
<>
  <Hero/>
  < Tables/>
  {/* <MyApp /> */}
  <Toaster/>  
   </>
  )
}