import React from 'react';
import './App.css';
import Sidebar from './app/pages/Sidebar';
import Header from './app/pages/Header';

function App() {
  return (
    <div className="app">
      <Header />
      
      {/* App Body */}
      <div className="app__body">
        <Sidebar />
      </div>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
    </div>
  )
}

export default App;
