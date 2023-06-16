import React from 'react';
import './App.scss';
import Home from './pages/Home';
import MyList from './pages/MyList';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <header className="content">
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/my-list" element={<MyList />} />
            </Routes>        
        </BrowserRouter>
      </header>
    </div>
  );
}

