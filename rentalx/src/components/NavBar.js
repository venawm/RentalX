import React from 'react'
import 'styled-components';
import styled from 'styled-components';
import Search from './SearchBox';


const NavBar=()=> {
  return (
    <Main>
        <div className="logo">
            <h1><a href="/">RentalX</a></h1>
        </div>
        <div className="links">
            <a href="/carslist">Rent</a>
            <a href="#/">About Us</a>
            <a href="/contactus">Contact Us</a>
            <div class="search"> <Search className="search"/></div>
            
        </div>
        <button>
            <a href="/login">Login/Signup</a> 
        </button>
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