import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Cards from './components/Cards';


function App() {
  return (
    <>
  <Router>
        <Navbar />
        <HeroSection />
        <Cards />
        <Routes>
        <Route path='/' exact component={Home} />
        </Routes>
      </Router>
    </>
    
  );
}

export default App;
