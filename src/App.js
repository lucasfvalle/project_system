import React from 'react';
import './App.css';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Dashboard from './pages/Dashboard/Dashboard';
import Register from './pages/Register/Register';

// Context
import {AuthProvider} from "./context/AuthContext.js";

// Componentes
import Header from './components/Header/Header';

// Config router
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {onAuthStateChanged} from 'firebase/auth';

// Hooks
import { useState, useEffect } from 'react';
import  { userAuthentication} from './hooks/userAuthentication';

function App() {
  const [user, setUser] = useState(undefined);
  const {auth} = userAuthentication();

  return (
    <div className="App">
     <AuthProvider>
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
     </AuthProvider>
     
    </div>
  );
}

export default App;
