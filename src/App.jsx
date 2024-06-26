import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import About from './Components/About'
import Features from './Components/Features';
import BestPractices from './Components/BestPractices';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';
import Training from './Components/Training';

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <About />
            <Features />
            <BestPractices />
            <Contact/>
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/training" element={<Training />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
