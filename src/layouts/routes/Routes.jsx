import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from '../Main';

import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Services from '../../pages/Services/Services';
import Gallery from '../../pages/Gallery/Gallery';
import Contact from '../../pages/Contact/Contact';



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
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>

      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }

    ]
  },
]);