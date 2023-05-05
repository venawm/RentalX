import React,{useState} from 'react'
import 'styled-components';
import styled from 'styled-components';
import loginCar from '../assests/loginCar.png'
import Login from './Login';
import Signup from './Signup';

const LoginPage=()=> {
  const [login,setLogin] = useState(true);
  return (
    <Logins>
      <div className="primary">
        <h1><a href="/">RentalX</a></h1>
        <img src= {loginCar} alt="" />
      </div>
      <div className="secondary">
        <div className="buttons">
          <button onClick={()=>{setLogin(true)}}>Login</button>
          <button onClick={()=>{setLogin(false)}}>Sign Up</button>
        </div>
        <div className="component">
          {login && <Login/>}
          {!login && <Signup setLogin={setLogin}/>}
        </div>
      </div>
    </Logins>
  )
}

const Logins = styled.div`
    display: flex;
    .primary{
      background-color:#FF5722;
      width: 35vw;
      height: 100vh;
      margin-left: -3rem;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
      position: relative;
      img{
        width: 50vw;
        background: transparent;
        position: absolute;
        top: 5rem;
        right: -14vw;

      }
      h1{
        background-color:#FF5722;
        margin-left: 2.5rem;
        margin-top: 1rem;
        border-top-right-radius: 30px;
        a{
          text-decoration: none;
          background-color:#FF5722;
        }
      }
    }
    .secondary{
      margin-top: 1rem;
      margin-left: 20vw;
      width: 30vw;
      .buttons{
        display: flex;
        justify-content: space-between;
        button{
        border: none;
        color: #FF5722;
        font-size: large;
        font-weight: 600;
        :hover{
            cursor: pointer;
            color: #FF5722;
            }
      }

      }
     
    }
   
    

`;

export default LoginPage