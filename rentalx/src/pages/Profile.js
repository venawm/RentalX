import React,{useState,useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import NavBar from '../components/NavBar';

const ProfileWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .button{
    width: 45%;
    display: flex;
    justify-content:center;
  .delete{
  background-color: #f44336;
  width: 75%;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  }
}
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const ProfileName = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProfileContact = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ProfileContactItem = styled.li`
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 10px;
`;

const Profile = () => {
  const[user,setUser] = useState({})
  const[active,setActive] = useState(false)

  useEffect(() => {
    const id = Cookies.get('user')
    axios
      .get(`http://localhost:5000/users?id=${id}`)
      .then((response) => {
        console.log(response.data.data)
        setUser(response.data.data[0]);
        console.log(user)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
    <NavBar/>
    <ProfileWrapper>
      <ProfileImage src="https://m.media-amazon.com/images/I/41jLBhDISxL._SX300_SY300_QL70_FMwebp_.jpg" alt="Profile Image" />
      <ProfileName>Name: {user.username}</ProfileName>
      <ProfileContact>
        <ProfileContactItem>Email: {user.email}</ProfileContactItem>
        <ProfileContactItem>Number: {user.number}</ProfileContactItem>
      </ProfileContact>
      <div class="button">
        <button className='delete'>Delete Account</button>
        {/* <button className='edit' onClick={()=> setActive(!active)}>Edit</button> */}
      </div>
      {/* {active &&
        <div className='active'>
          <input placeholder='Enter Your New Email' type="text" name="email" id=""></input>
          <input placeholder='Enter Your New Number' type="text" name="number" id=""></input>
          <button id='edit'>Submit</button>
        </div> */}
      
      
    </ProfileWrapper>
    </div>
  );
};

export default Profile;
