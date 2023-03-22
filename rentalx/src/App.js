import React from 'react'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CarsList from './pages/CarsList';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={ <HomePage/> } />
          <Route path="/login" element={ <LoginPage/> } />
          <Route path="/carslist" element={ <CarsList/> } />
        </Routes>
      </div>
    </div>
  );
}


export default App;
