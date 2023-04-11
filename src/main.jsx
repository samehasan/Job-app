import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Appliedjobs from './components/Applied-jobs/Applied-jobs';
import Blog from './components/Blog/Blog';
import JobDetail from './components/JobDetail/JobDetail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<p>Error</p>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/jobs.json')
      },
      {
        path:"job/:id",
        element:<JobDetail></JobDetail>,
        // loader:({params})=>fetch(`jobs.json/${params.id}`)
        loader:()=>fetch("/jobs.json")

      },
     
      {
        path:'statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'applied-jobs',
        element:<Appliedjobs></Appliedjobs>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
     

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
