import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
  element: <div>Hello world</div>
},
{
  path: '/about',
  element: <div>i am in about page</div>
},
{
  path: '/contact',
  element: <div> i am in the contact page</div>
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
