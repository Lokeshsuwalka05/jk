// src/Navbar.js
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/">Personal Portfolio</a>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`navbar-right ${isOpen ? 'open' : ''}`}>
      <a href="#home">Home</a>
      <a href="#my-journey">Journey</a>
       <a href="#skills">Skills</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#education">Education</a>
        <a href="#articles">Articles</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;