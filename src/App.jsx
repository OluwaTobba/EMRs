import React from 'react'
import './index.css';
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import About from './Components/About'
import Features from './Components/Features';
import BestPractices from './Components/BestPractices';
import Resources from './Components/Resources';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Features />
      <BestPractices />
      <Resources />
      <Testimonials />
      <Contact/>
      <Footer />
    </>
  );
}

export default App
