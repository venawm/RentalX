import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if(username==='admin' && password==='admin'){
        navigate('/admin')

      }
      await axios.post('http://localhost:5000/login', {
        username,
        password,
      }).then((data)=>{
        if(data.data.message==="Login successful"){
          const userId = data.data.user.user_id
          const token = data.data.token
          Cookies.set('token', token, { expires: 7 });
          Cookies.set('user', userId, { expires: 7 });
         navigate('/')
        }
         
      })
 
    } catch (err) {
      toast.error('Invalid Email or Password Please try again', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        
      console.log(err);
      // handle error response from backend here
    }
  };

  return (
    <Main>
      <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
{/* Same as */}
<ToastContainer />
      <div className="mainform">
        <div className="head">
          <p className="heading">Welcome back</p>
          <p className="text">Please login to your account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <p>User name</p>
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
          <p>Password</p>
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          <button className='button' type="submit">Login</button>
          <a href="Admin">Admin</a>
        </form>
      </div>
      
    </Main>
  );
};




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
    display: flex;
    flex-direction: column;
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
  .button{
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
  
  .logins{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
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