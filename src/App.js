import React from 'react';
import './App.css';
import Sidebar from './app/pages/Sidebar';
import Header from './app/pages/Header';
import Feed from './app/pages/Feed';

function App() {
  return (
    <div className="app">
      <Header />
      
      {/* App Body */}
      <div className="app__body">
        <Sidebar />
        <Feed /> 
      </div>
        {/* Feed */}
        {/* Widgets */}
    </div>
  )
}

export default App;
