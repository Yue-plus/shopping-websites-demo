import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider} from "react-bootstrap";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Carousels from "./components/Carousels/Carousels";

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
      style={{backgroundColor: '#f5f5f5'}}
    >
      <NavBar/>
      <Carousels/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App;
