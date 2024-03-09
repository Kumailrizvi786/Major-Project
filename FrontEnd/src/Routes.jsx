import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Notifications = React.lazy(() => import("pages/Notifications"));
const SingleStory = React.lazy(() => import("pages/SingleStory"));
const Stories = React.lazy(() => import("pages/Stories"));
const Home1 = React.lazy(() => import("pages/Home1"));
const Signup = React.lazy(() => import("pages/Signup"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/singlestory" element={<SingleStory />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
