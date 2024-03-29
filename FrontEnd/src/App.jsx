import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import '@radix-ui/themes/styles.css';
import Tables from './components/Tables';
import Hero from './components/Hero';
import { IoChatbubblesOutline } from 'react-icons/io5';

export default function App() {
  const [themeMode, setThemeMode] = useState('light');

  const toggleTheme = () => {
    toast.success('Theme Changed Successfully');
    setThemeMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  

  return (
    <>
      <Hero />
      <Tables />
      <Toaster />
    </>
  );
}
