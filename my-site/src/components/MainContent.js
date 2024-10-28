// MainContent.js
import React from 'react';
import './MainContent.css';
import SnippetList from './SnippetList';

const MainContent = ({ children }) => {
  return (
    <main className="main-content">
      <SnippetList />
    </main>
  );
};

export default MainContent;