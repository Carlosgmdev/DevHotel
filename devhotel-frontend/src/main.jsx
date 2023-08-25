import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css'
import Layout from './routes/Layout';
import Bedrooms from './components/Bedrooms';
import Reservations from './components/Reservations';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>
  },
  {
    path: "/bedrooms",
    element: <Layout><Bedrooms/></Layout>
  },
  {
    path: "/reservations",
    element: <Layout><Reservations/></Layout>
  },
  {
    path: "/signup",
    element: <div>Signup</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
