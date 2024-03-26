import React, { useState } from 'react'
import { Theme } from '@radix-ui/themes';
import Nav from './components/Nav';
import toast, { Toaster } from "react-hot-toast";
import {
    Outlet
  } from "react-router-dom";
function Layout() {
    const [themeMode, setThemeMode] = useState("light");
    const toggleTheme = () => {
      toast.success('Theme Changed Successfully');
      console.log("Theme Changed Successfully")
     setThemeMode(prevMode => prevMode === "light" ? "dark" : "light");
   };
    return (
      <div>
        <Theme appearance={themeMode}>
        <Nav onThemeChange={toggleTheme} />
        <Outlet/>
        <Toaster/>
        </Theme>
        
      </div>
    )
  }

export default Layout
