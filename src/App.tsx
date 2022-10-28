import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider} from "react-bootstrap";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
      <NavBar/>
      <Footer/>
    </ThemeProvider>
  )
}

export default App;
