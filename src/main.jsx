import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root.jsx';
import Statistics from './components/statistics/Statistics.jsx';
import Applied from './components/applied/Applied.jsx';
import ErrorPage from './components/errorPage/ErrorPage.jsx';
import JobDetails from './components/jobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
     {
      path: '/',
      element: <Statistics></Statistics>
     },

     {
      path: '/applied',
      element: <Applied></Applied>
     },
     {
      path: '/job/:id',
      element:<JobDetails></JobDetails>,
      loader: ()=> fetch('/jobs.json')
     }

    ],

    
  },
 

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
