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
import CardDetails from './Routers/CardDetails';
import Content from './Tabs/Content';
import Author from './Tabs/Author';
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
      },
      {
        path:"/blog/:id",
        loader : ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
        element:<CardDetails></CardDetails>,  
        children : [
           {
            index : true,
            loader : ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            element :<Content></Content>
           },
           {
            path : "content",
            loader : ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            element :<Content></Content>
           },
           {
            path : "author",
            loader : ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            element : <Author></Author>
           }
        ]
        
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
