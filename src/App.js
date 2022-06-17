import React from 'react';
import './App.css';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Dashboard from './pages/Dashboard/Dashboard';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

// Context
import {AuthProvider} from "./context/AuthContext.js";

// Componentes
import Header from './components/Header/Header';

// Config router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

// Auth
import {onAuthStateChanged} from 'firebase/auth';

// Hooks
import { useState, useEffect } from 'react';
import  { useAuthentication} from './hooks/useAuthentication';

function App() {
  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() =>{
    onAuthStateChanged(auth, (user) =>{
      setUser(user);
    })
  }, [auth])

  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
     <AuthProvider value={{user}}>
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={user ? <Dashboard/> : <Login />} />
              <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={!user ? <Navigate to="/" /> : <Dashboard />} />
            </Routes>
        </BrowserRouter>
     </AuthProvider>
     
    </div>
  );
}

export default App;
