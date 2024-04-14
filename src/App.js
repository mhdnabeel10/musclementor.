import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import Exercises from './components/Exercises/Exercises';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Abs from '../src/components/Abs/Abs'
import Arms from './components/Arms/Arms';
import Back from './components/Back/Back';
import Calves from './components/Calves/Calves';
import Cardio from './components/Cardio/Cardio';
import Chest from './components/Chest/Chest';
import Legs from './components/Legs/Legs';
import Shoulders from './components/Shoulders/Shoulders';
import JoinUs from './components/JoinUs/JoinUs';




function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<JoinUs />} />
        <Route path="/abs" element={<Abs />} />
        <Route path="/arms" element={<Arms />} />
        <Route path="/back" element={<Back />} />
        <Route path="/calves" element={<Calves />} />
        <Route path="/cardio" element={<Cardio />} />
        <Route path="/chest" element={<Chest />} />
        <Route path="/legs" element={<Legs />} />
        <Route path="/shoulders" element={<Shoulders />} />
        <Route path="/exercises" element={<Exercises />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
