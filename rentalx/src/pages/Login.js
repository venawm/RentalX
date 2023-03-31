import React from 'react'
import 'styled-components';
import styled from 'styled-components';

const Login=()=> {
  return (
    <Main>
      <div className="mainform">
        <div className="head">
          <p className="heading">Welcome back</p>
          <p className='text'>Please login to your account</p>
        </div>
        <form action="">
          <p>User name</p>
          <input type="text" />
          <p>Password</p>
          <input type="password" />
        </form>
      </div>
      <div className="logins">
        <button className='button'>Login</button>
        <a href="/#">Forgot Password</a>
        <a href="/#">Admin ?</a>
      </div>
    </Main>
  )
}

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  font-size: medium;
  margin-top: 10rem;
  .head{
    margin-bottom: 2rem;
  }
  .heading{
    font-size: 2rem;
    font-weight: 600;
    color: #FF5722;
  }
 
  form{
    p{
      color: rgba(48, 56, 65, 0.5);
    }
    input{
      height: 2rem;
      width: 25vw;
      border: none;
      border-bottom: solid 1px #303841;
      font-size: large;
      margin-bottom: 2rem;
    }
    input:focus, textarea:focus, select:focus{
        outline: none;
    }
  }
  .logins{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    button{
        border: none;
        background-color: #FF5722;
        height: 3rem;
        width: 20vw;
        font-size: medium;
        font-weight: 700;
        color: #EEEEEE;
       
        border-radius: 10px;
        :hover{
            cursor: pointer;
            background-color: #ffb39b;          
        }
    }
    a{
        text-decoration: none;
        margin-top:10px;
        :hover{
          color: #FF5722;
        }
      }
  }
  

`;

export default Login