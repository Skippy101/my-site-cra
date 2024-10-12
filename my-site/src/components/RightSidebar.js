// RightSidebar.js
import React from 'react';

const RightSidebar = ({ children }) => {
  return (
    <aside className="right-sidebar">
      {children}
    </aside>
  );
};

export default RightSidebar;