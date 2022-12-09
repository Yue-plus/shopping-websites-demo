import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Info from "./pages/Info";
import Car from "./pages/Car";
import Pay from "./pages/Pay";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";


import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";

const routes = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children: [
    {path: '/', element: <Home/>},
    {path: '/info', element: <Info/>},
    {path: '/car', element: <Car/>},
    {path: '/pay', element: <Pay/>},
    {path: '/signup', element: <SignUp/>},
    {path: '/signin', element: <SignIn/>},
  ],
}]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
