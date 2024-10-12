// src/components/Resources.js
import React from 'react';
import MainContent from './MainContent';
import RightSidebar from './RightSidebar';
import './Resources.css';

const Resources = () => {
  return (
    <div className="resources-container">
      <MainContent>
        <h2>Resources</h2>
        <p>Find resources here!</p>
      </MainContent>
      <RightSidebar />
    </div>
  );
};

export default Resources;
