import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';

// Componentes
import Header from './components/Header/Header';

// Config router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
