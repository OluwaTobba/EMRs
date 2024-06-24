import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="header-content">
        <h1>ELECTRONIC MEDICAL RECORDS SECURITY</h1>
        <h2>Secure Your Medical Records</h2>
        <p>Ensuring the confidentiality, integrity, and availability of your Electronic Medical Records.</p>
        <a href="#about" className="header-button">Learn More</a>
      </div>
    </header>
  );
}

export default Header;
