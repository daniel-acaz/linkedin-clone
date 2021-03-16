import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './app/pages/Sidebar';
import Header from './app/pages/Header';
import Feed from './app/pages/Feed';
import Widgets from './app/components/Widgets';
import { login, logout, selectUser } from './features/userSlice';
import Login from './app/pages/Login';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        )
      } else {
        dispatch(logout())
      }
    })
  }, [])


  return (
    <div className="app">
      <Header />
      
      { !user ? (
        <Login />
      ) : (
      <div className="app__body">
        <Sidebar />
        <Feed /> 
        <Widgets/>
      </div>
      )}
    </div>
  )
}

export default App;
