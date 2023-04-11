import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import JobCategory from './components/JobCategory/JobCategory';
import FeaturedJob from './components/FeaturedJob/FeaturedJob';
import JobDetails from './components/JobDetailes/JobDetails';
import { customLoader } from './components/CustomLoader/CustomLoader';
import Error from './components/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("featuredJob.json"),
        children: [
          {
            path: "/",
            element: <JobCategory></JobCategory>,
          },
          {
            path: "/",
            element: <FeaturedJob></FeaturedJob>
          }
        ]
      },
      {
        path: "/jobDetails",
        element: <JobDetails></JobDetails>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: customLoader,
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
    ]
  },
  {
    path: "*",
    element: <Error></Error>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)