import React from 'react'
import Navbar from './components/Navbar/Navbar';
import style from './App.module.css'
import Home from './components/Home/Home';
import About from './components/About/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavbarMobile from './components/Navbar/Mobile/NavbarMobile';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Router>
        <NavbarMobile />
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
