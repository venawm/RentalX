import React,{useState} from 'react'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CarsList from './pages/CarsList';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Dashboard from './pages/Admin/Dashboard';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar';


function App() {
  const[searchText,setSearchText] = useState('');

  
  return (
    <div>
      <div>
        <Routes>

          <Route path="/"  element={ <HomePage searchText={searchText} setSearchText={setSearchText}/> } />
          <Route path="/"  element={ <NavBar/> } />
          <Route path="/login" element={ <LoginPage/> } />
          <Route path="/carslist" element={ <CarsList searchText={searchText} setSearchText={setSearchText} /> } />
          <Route path="/contactus" element={ <ContactUs/> } />
          <Route path="/aboutus" element={ <AboutUs/> } />
          <Route path="/profile" element={ <Profile/> } />
          <Route path="/admin" element={ <Dashboard/> } />
          <Route path="/search" element={ <CarsList/> } />
          <Route path="/notification" element={ <Notifications/> } />
        </Routes>
      </div>
    </div>
  );
}


export default App;
