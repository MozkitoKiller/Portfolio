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

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
