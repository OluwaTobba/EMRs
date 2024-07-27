import React from 'react';
import HeaderImg from '../assets/doctor-laptop.jpg';
import './Header.css';

function Header() {
  
  return (
    
    <header 
      className="header bg-blue-600 text-white py-20" 
      id="home"
      style={{ backgroundImage: `url(${HeaderImg})` }}
      >

      <div className="absolute inset-0 bg-blue-600 opacity-75"></div>
      <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          ELECTRONIC MEDICAL RECORDS SECURITY
        </h1>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6">
          Secure Your Medical Records
        </h2>

        <p className="text-lg sm:text-xl lg:text-2xl mb-8">
          Ensuring the confidentiality, integrity, and availability of your Electronic Medical Records.
        </p>

        <a
          href="/#about"
          className="bg-yellow-300 text-white-500 py-2 px-6 rounded-full text-lg sm:text-xl lg:text-2xl hover:bg-white hover:text-blue-500 transition duration-500 shadow-lg"
        >
          Learn More
        </a>

      </div>

    </header>

  );

}

export default Header;