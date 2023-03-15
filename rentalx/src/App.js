import React from 'react'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CarsList from './pages/CarsList';
import Modal from './components/Modal';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={ <HomePage/> } />
          <Route path="/login" element={ <LoginPage/> } />
          <Route path="/carslist" element={ <CarsList/> } />
          <Route path="/a" element={ <Modal/> } />
        </Routes>
      </div>
    </div>
  );
}


export default App;
