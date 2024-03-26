import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './pages/Login/Login.jsx';
import Signup from './pages/Signup/Signup.jsx';
import ErrorPage from './components/ErrorPage.jsx'
import Nav from './components/Nav.jsx';
import '@radix-ui/themes/styles.css';

import Explore from './pages/Explore.jsx';
import Exercise from './pages/Exercise.jsx';
import Leaderboard from './pages/Leaderboard.jsx';
import Contact from './pages/Contact.jsx';
import Layout from './Layout.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <App/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/signup",
        element: <Signup/>,
      },
      {
        path: "/exercise",
        element: <Exercise/>,
      },
      {
        path: "/explore",
        element: <Explore/>,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
    errorElement: <ErrorPage />
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
