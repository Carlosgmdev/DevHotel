import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css'
import Layout from './routes/Layout';
import Bedrooms from './components/Bedrooms';

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
    element: <h1>reservations</h1>
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
