import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
const Signup = ({setLogin}) => {
  // Use destructuring to define formData state and setFormData function
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    number: '',
  });

  // Define handleChange function to update formData state based on input values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Define handleSubmit function to send form data to server using Axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
await axios.post('http://localhost:5000/signup', formData).then((data)=>{
        if(data.data.message==="User created successfully"){
          
          setLogin(true)
        }
      })
 
    } catch (error) {
      console.error(error);
    }
  };

  // Render form using styled components
  return (
    <Main>
      <div className="mainform">
        <div className="head">
          <p className="heading">Welcome</p>
          <p className="text">Please Signup to create your account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <p>Email</p>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          <p>User name</p>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          <p>Password</p>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          <p>Number</p>
          <input type="text" name="number" value={formData.number} onChange={handleChange} />
          <button type="submit" className="button">Signup</button>
        </form>
      </div>
    </Main>
  );
};

// Define Main component using styled components
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: medium;
  margin-top: 10rem;

  .head {
    margin-bottom: 2rem;
  }

  .heading {
    font-size: 2rem;
    font-weight: 600;
    color: #FF5722;
  }

  form {
    p {
      color: rgba(48, 56, 65, 0.5);
    }

    input {
      height: 2rem;
      width: 25vw;
      border: none;
      border-bottom: solid 1px #303841;
      font-size: large;
      margin-bottom: 2rem;
    }

    input:focus, textarea:focus, select:focus {
      outline: none;
    }
  }
    button {
      border: none;
      background-color: #FF5722;
      height: 3rem;
      width: 80%;
      font-size: medium;
      font-weight: 700;
      color: #EEEEEE;
      border-radius: 10px;

      :hover {
        cursor: pointer;
        background-color: #ffb39b;
      }
    }

    a {
      text-decoration: none;

      :hover {
        color: #FF5722;
      }
    }

`;

export default Signup;
