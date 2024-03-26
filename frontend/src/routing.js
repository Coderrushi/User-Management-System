import React from "react"
import App from "./Compnents/App"
import Users from './Compnents/Users'
import Home from './Compnents/Home'
import Update from './Compnents/Update'

import {
    createBrowserRouter
  } from "react-router-dom";
import Register from "./Compnents/Register";


const customRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [{
            path:'/users',
            element: <Users />
        },
        {
            path:'/home',
            element: <Home />
        },
        {
            path:'/register',
            element: <Register />
        },
        {
            path:'/update',
            element: <Update />
        }
    ]
    }
]);

export default customRouter;

// we create children to navigate to children pages
