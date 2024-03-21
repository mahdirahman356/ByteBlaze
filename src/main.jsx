import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Routers/Home';
import Blogs from './Routers/Blogs';
import Bookmarks from './Bookmarks';
import HomeContant from './Routers/HomeContant';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children : [
      {
        path: "/",
        element: <div><HomeContant></HomeContant></div>
      },
      {
        path:"/blogs",
        loader : () => fetch('https://dev.to/api/articles'),
        element : <Blogs></Blogs>
      },
      {
        path:"/bookmark",
        element: <Bookmarks></Bookmarks>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
