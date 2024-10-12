// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ children }) => {
  return (
    <aside className="sidebar">
      <p>This is the Sidebar!</p>
      {children}
      
    </aside>
  );
};

export default Sidebar;
