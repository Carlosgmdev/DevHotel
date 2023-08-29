import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css'
import Dashboard from './components/Dashboard';
import Bedrooms from './components/Bedrooms';
import Reservations from './components/Reservations';
import Login from './components/Login';
import Signup from './components/Signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/bedrooms",
    element: <Dashboard><Bedrooms/></Dashboard>
  },
  {
    path: "/reservations",
    element: <Dashboard><Reservations/></Dashboard>
  },
  {
    path: "/signup",
    element: <Signup/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
