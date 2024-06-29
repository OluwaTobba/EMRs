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
import Login from './Components/Training/Login';
import ForgotPassword from './Components/Training/ForgotPassword';
import Register from './Components/Training/Register';
import Dashboard from './Components/Training/Dashboard';
import AdminPanel from './Components/Training/Admin/AdminPanel';

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
            <Contact />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
