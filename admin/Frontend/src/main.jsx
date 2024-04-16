import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import AllCard from './components/AllCard.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Usermanagement from './pages/Usermanagement.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: "/cards",
        element: <AllCard/>,
      },
      {
        path: "/",
        element: <Dashboard/>,
      },
      {
        path: "/usermanagement",
        element: <Usermanagement/>,
      },
      
    ],
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/forgetpassword",
    element: <ForgotPassword/>,
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* provider */}

    <RouterProvider router={router}  />
  </React.StrictMode>,
)
