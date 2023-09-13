// Header.js

import React from 'react';

const Header = () => {
  console.log('Header is being rendered');
  return (
    <div className="header">
      <button className="sidebar-toggle">Sidebar Toggle</button>
      <div className="header-right">
        <button className="settings-button">Settings</button>
        <button className="night-mode-toggle">Night Mode</button>
      </div>
    </div>
  );
};

export default Header;
