import React from 'react';
import ReactDOM from 'react-dom/client';

import Login from "./routes/Login";
import Frame from "./routes/Frame";
import ErrorPage from "./routes/ErrorPage";

import Home from "./components/pageComp/Home";
import Shop from "./components/pageComp/Shop";

import './assets/css/bootstrap.min.css';
import './assets/css/main.css';
import './assets/css/main.css.map';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/main/*",
    element: <Frame />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
