import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from '../Main';

import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';


export const  router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main> ,
    children: [
      {
        path:'',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      

    ]
  },
]);