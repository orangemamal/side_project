import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';

import Login from "./routes/Login";
import Frame from "./routes/Frame";
import ErrorPage from "./routes/ErrorPage";
import Cart from "./routes/Cart";
import Checkout from "./routes/Checkout";
import SignUp from "./routes/SignUp";
import UserInfo from "./routes/UserInfo";

import Home from "./components/pageComp/Home";
import Shop from "./components/pageComp/Shop";
import Services from "./components/pageComp/Services";
import Blog from "./components/pageComp/Blog";
import About from "./components/pageComp/About";
import Contact from "./components/pageComp/Contact";

import './assets/css/bootstrap.min.css';
import './assets/css/main.css';
import './assets/css/main.css.map';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'simplebar-react/dist/simplebar.min.css';
import 'animate.css';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "Login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "SignUp",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "UserInfo",
    element: <UserInfo />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/*",
    element: <Frame />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "Home",
        element: <Home />,
      },
      {
        path: "Shop",
        element: <Shop />,
      },
      {
        path: "Services",
        element: <Services />,
      },
      {
        path: "Blog",
        element: <Blog />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "Cart",
        element: <Cart />,
      },
      {
        path: "Checkout",
        element: <Checkout />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
