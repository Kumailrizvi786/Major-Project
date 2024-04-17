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
import NewExercise from './components/Excercise/NewExercise.jsx'
import AddExercise from './pages/AddExercise.jsx'
import AllExercise from './pages/AllExercise.jsx'
import Profile from './pages/Profile/Profile.jsx'



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
      {
        path: "/create-exercise",
        element: <AddExercise/>,
      },
      {
        path: "/all-exercises",
        element: <AllExercise/>,
      },  {
        path: "/profile",
        element: <Profile/>,
      },
      
      
    ],
  },
  {
    path: "/login",
    element: <Login/>,
  },{
    path: "/*",
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
