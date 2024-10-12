// src/components/Header.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">NodeXP</div>
      <nav>
        <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
          <li>
            <NavLink 
              to="/" 
              exact 
              className={({ isActive }) => (isActive ? "active" : "")} 
              onClick={toggleMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => (isActive ? "active" : "")} 
              onClick={toggleMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/resources" 
              className={({ isActive }) => (isActive ? "active" : "")} 
              onClick={toggleMenu}
            >
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => (isActive ? "active" : "")} 
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
