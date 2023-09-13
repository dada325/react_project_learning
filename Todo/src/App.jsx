// App.js

import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CompanyList from './components/CompanyList';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <CompanyList />
    </div>
  );
};

export default App;
