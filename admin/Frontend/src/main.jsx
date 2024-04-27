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
import ExerciseMangement from './pages/ExerciseMangement.jsx'
import Categories from './pages/Categories.jsx'
import EditExercise from './components/Excercise/EditExercise.jsx'
import EditExercisePage from './pages/EditExercisePage.jsx'
import AddUser from './pages/AddUser.jsx'



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
        path: "/exercise-management",
        element: <ExerciseMangement/>,
      },
      {
        path: "/categories",
        element: <Categories/>,
      },
      {
        path: "/all-exercises",
        element: <AllExercise/>,
      },  {
        path: "/profile",
        element: <Profile/>,
      },  {
        path: "/create-user",
        element: <AddUser/>,
      },
      {
        path: "/edit-exercise/:name",
        element: <EditExercisePage/>, 
      }
      
      
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
