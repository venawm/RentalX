import React from 'react'
import 'styled-components';
import styled from 'styled-components';
import Search from './SearchBox';
import Cookies from 'js-cookie';
import { CgProfile } from 'react-icons/cg';

const NavBar=()=> {
    const loginStatus = Cookies.get('loggedIn');
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
        {loginStatus && <button className='profile'> <CgProfile className='icon'/></button> }
          {!loginStatus && <button>
            <a href="/login">Login/Signup</a> 
        </button>}
        
    </Main>
  )
}

const Main = styled.div`
    a{
        text-decoration: none;
    }
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    .links{
        display: flex;
        font-weight: 560;
        align-items:center;
        justify-content: space-evenly;
        .search{
            margin-left:0rem;
            
        }
        
        a{
            text-decoration: none;
            margin-right: 5rem;
        }
    }
    .profile{
        border-radius: 1000px;
        height: 50px;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FF5722;
            :hover{
            .icon{
                background-color: #ffb39b;
            }

        }
        .icon{
            font-size: xx-large;
            background-color: #FF5722;
        }
    }
    button{
        border: none;
        background-color: #FF5722;
        height: 2.5rem;
        width: 8rem;
        font-size: medium;
        font-weight: 700;
       
        border-radius: 10px;
        :hover{
            cursor: pointer;
            background-color: #ffb39b;
            a{
                background-color: #ffb39b;
                color: #EEEEEE;
            }
        }
        a{
            background-color: #FF5722;
            color: #EEEEEE;
        }
    }
`;

export default NavBar