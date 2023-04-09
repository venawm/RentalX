import React,{useState} from 'react'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CarsList from './pages/CarsList';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import { Routes, Route } from "react-router-dom"
import Cookies from 'js-cookie';

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const loginStatus = Cookies.get('loggedIn'); // this will return true if the cookie exists and is not expired, otherwise it will return undefined
  if(loginStatus===true){
    setIsLoggedIn(true)
  }
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={ <HomePage/> } />
          <Route path="/login" element={ <LoginPage/> } />
          <Route path="/carslist" element={ <CarsList/> } />
          <Route path="/contactus" element={ <ContactUs/> } />
          <Route path="/aboutus" element={ <AboutUs/> } />
        </Routes>
      </div>
    </div>
  );
}


export default App;
