import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import CardDetails from './Components/CardDetails';


function App() {
  return (
    <div>
      <Navbar/> 
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardDetails/:id" element={<CardDetails />} />
      </Routes>
    </div>
  );
}

export default App;