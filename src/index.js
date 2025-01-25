import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import ErrorPage from './pages/errorpage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/b",
    element: <About />,
  },
  {
    path: "/c",
    element: <Contact />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);