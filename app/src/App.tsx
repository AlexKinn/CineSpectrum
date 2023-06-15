import React from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="App">
      <header className="content">
        <Navbar />
        <Home />
      </header>
    </div>
  );
}

