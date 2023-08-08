import React from 'react';
import './App.scss';
import Home from './pages/Home/Home';
import MyList from './pages/MyList/MyList';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from './pages/MoviePage';
import ShowPage from './pages/ShowPage';

export default function App() {
  return (
    <div className="App">
      <header className="content">
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/my-list" element={<MyList />} />
              <Route path="/movie/:id" element={<MoviePage />} />
              <Route path="/show/:id" element={<ShowPage />} /> {/* DEPRECATED */}
              <Route path="/tv/:id" element={<ShowPage />} />
            </Routes>        
        </BrowserRouter>
      </header>
    </div>
  );
}

