import React from 'react';
import './App.css';
import Sidebar from './app/pages/Sidebar';
import Header from './app/pages/Header';
import Feed from './app/pages/Feed';
import { selectUser } from './features/userSlice';
import Login from './app/pages/Login';
import { useSelector } from 'react-redux';

function App() {

  const user = useSelector(selectUser)


  return (
    <div className="app">
      <Header />
      
      { !user ? (
        <Login />
      ) : (
      <div className="app__body">
        <Sidebar />
        <Feed /> 
      </div>
      )}
    </div>
  )
}

export default App;
