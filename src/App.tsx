import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider} from "react-bootstrap";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Car from "./pages/Car";
import Pay from "./pages/Pay";

const routes = createBrowserRouter([
  {path: '/', element: <Home/>},
  {path: '/info', element: <Info/>},
  {path: '/car', element: <Car/>},
  {path: '/pay', element: <Pay/>},
])

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
      style={{backgroundColor: '#f5f5f5'}}
    >
      <NavBar/>
      <RouterProvider router={routes}/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App;
