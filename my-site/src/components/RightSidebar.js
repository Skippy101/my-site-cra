// RightSidebar.js
import React from 'react';
import './RightSidebar.css';

const RightSidebar = () => {
  return (
    <aside className="right-sidebar">
      <nav className="sub-navbar">
        <ul>
          <li><a href="#" className="active">VEXTABLES</a></li>
          <li><a href="#">PYTON SNIPPETS</a></li>
          <li><a href="#">TOOLS & FILES</a></li>
          <li><a href="#">TUTORIALS</a></li>
        </ul>
      </nav>
      <hr className="seperator-line"/>
      <div className="search-bar-wrapper">
        <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <use href={`${process.env.PUBLIC_URL}/search-icon.svg#search-icon`} />
        </svg>
        <input type="text" className="search-bar" placeholder="Search..."/>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </aside>
  );
};

export default RightSidebar;