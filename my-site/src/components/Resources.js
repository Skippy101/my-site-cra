// src/components/Resources.js
import React from 'react';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import './Resources.css';

const Resources = () => {
  return (
    <div className="resources-container">
      <MainContent>
        <h2>Resources</h2>
        <p>Find resources here!</p>
      </MainContent>
      <Sidebar>
        <h3>Search Resources</h3>
        <input type="text" placeholder="Search..." />
      </Sidebar>
    </div>
  );
};

export default Resources;
