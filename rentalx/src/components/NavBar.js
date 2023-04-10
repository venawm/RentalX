import React, { useState, useRef, useEffect } from 'react';
import 'styled-components';
import styled from 'styled-components';
import Search from './SearchBox';
import Cookies from 'js-cookie';
import { CgProfile } from 'react-icons/cg';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const loginStatus = Cookies.get('loggedIn');
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [menuRef]);

  return (
    <Main>
      <div className="logo">
        <h1><a href="/">RentalX</a></h1>
      </div>
      <div className="links">
        <a href="/carslist">Rent</a>
        <a href="/aboutus">About Us</a>
        <a href="/contactus">Contact Us</a>
        <div class="search"> <Search className="search"/></div>
      </div>
      {loginStatus && (
        <div className="profile">
          <button onClick={() => setShowMenu(!showMenu)}>
            <CgProfile className='icon' />
          </button>
          {showMenu && (
            <div ref={menuRef} className="menu">
              <a href="/profile">My Profile</a>
              <a href="/login">Logout</a>
            </div>
          )}
        </div>
      )}
      {!loginStatus && (
        <button>
          <a href="/login">Login/Signup</a> 
        </button>
      )}
    </Main>
  )
}

const Main = styled.div`
  a {
    text-decoration: none;
  }
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  .links {
    display: flex;
    font-weight: 560;
    align-items: center;
    justify-content: space-evenly;
    .search {
      margin-left: 0rem;
    }
    a {
      text-decoration: none;
      margin-right: 5rem;
    }
  }
  .profile {
    position: relative;
    button {
      border: none;
      background-color: #FF5722;
      height: 50px;
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1000px;
      :hover {
        .icon {
          background-color: #ffb39b;
        }
      }
      .icon {
        font-size: xx-large;
        background-color: #FF5722;
      }
    }
    .menu {
      position: absolute;
      top: 60px;
      width: 10rem;
      right: 0;
      background-color: #FFF;
      padding: 1rem;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      z-index: 100000000;
      a {
        display: block;
        padding: 0.5rem 1rem;
        text-decoration: none;
        background-color: #FFF;
        color: #333;

      :hover {
        background-color: #eeeeee;
      }
    }
  }

}
`;

export default NavBar