import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">MyApp</div>
      <ul className={isMobile ? "navbar-links-mobile active" : "navbar-links"}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button
        className="navbar-toggle"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? 'Close' : 'Menu'}
      </button>
    </nav>
  );
};

export default Navbar;
