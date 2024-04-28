import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/store";
import store from "./store/store";
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
import Profile from './pages/User/Profile.jsx';
import Instruction from './pages/Practice/Instruction.jsx';
import TwoFactor from './pages/Login/TwoFactor.jsx';
import ForgetPassword from './pages/Login/ForgetPassword.jsx';
import ChangePassword from './pages/Login/ChangePassword.jsx';
import Test from './components/Test.jsx';
import Community from './pages/Community.jsx';
import SpeedReadingPage from './pages/Reading/SpeedReadingPage.jsx';
// import Comprehension from './pages/Reading/Comprehension.jsx';
import ResultPage from './pages/Reading/Result.jsx';
import AllExercise from './pages/AllExercise.jsx';
import FixationPage from './pages/Exercise/FixationPage.jsx';
import TextImportAndSyncPage from './pages/Exercise/TextImportAndSyncPage.jsx';
import GeneralExercise from './pages/Exercise/GeneralExercise.jsx';
import VoiceReadingPage from './pages/Exercise/VoiceReadingPage.jsx';
import EyeTrackingComponent from './pages/Exercise/EyeTrackingComponent.jsx';
import ExerciseOne from './pages/Exercise/ExerciseOne.jsx';
import Comprehension from './pages/Exercise/Comprehension.jsx';
import Result from './pages/Exercise/Result.jsx';
import WordbyWord from './pages/Exercise/WordbyWord.jsx';
import SkimmingExercise from './pages/Exercise/SkimmingExercise.jsx';


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
        element: <AllExercise/>,
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
        path: "/fixations",
        element: <FixationPage/>,
      },
      {
        path: "/general-exercise",
        element: <GeneralExercise/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/profile",
        element: <Profile/>,
      },
      {
        path: "/instruction",
        element: <Instruction/>,
      },
      {
        path: "/twofactor",
        element: <TwoFactor/>,
      },
      {
        path: "/forgetpassword",
        element: <ForgetPassword/>,
      },
      {
        path: "/changepassword",
        element: <ChangePassword/>,
      },{
        path: "/start-reading",
        element: <Test/>,
      },
      // {
      //   path: "/exercise",
      //   element: <ChangePassword/>,
      // },
      {
        path: "/test",
        element: <EyeTrackingComponent/>,
      },
      {
        path: "/voice-exercise",
        element: <VoiceReadingPage/>,
      },
      {
        path: "/generative-exercise",
        element: <Exercise/>,
      },{
        path: "/subvocalization",
        element: <WordbyWord/>,
      },{
        path: "/skimming",
        element: <SkimmingExercise/>,
      },
      {
        path: "/text-import",
        element: <TextImportAndSyncPage/>,
      },
      {
        path: "/community",
        element: <Community/>,
      },
      {
        path: "/speedread",
        element: <SpeedReadingPage/>,
      },
      {
        path: "/comprehension",
        element: <Comprehension/>,
      },
      {
        path: "/result",
        element: <Result/>,
      },{
        path: "/exercise-one",
        element: <ExerciseOne/>,
      },
    ],
    errorElement: <ErrorPage />
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
