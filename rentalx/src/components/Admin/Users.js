import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 2000px;
  margin: 0 auto;
`;

const Th = styled.th`
  text-align: left;
  background-color: #f8f9fa;
  padding: 8px;
`;

const Td = styled.td`
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ddd;
  button{
        border: none;
        background-color: red;
        height: 3rem;
        width: 10vw;
        font-size: medium;
        font-weight: 700;
        color: #303841;
       
        border-radius: 10px;
        :hover{
            cursor: pointer;
            background-color: #ffb39b;          
        }
    }
`;

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/users')
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <Th>Username</Th>
          <Th>Email</Th>
          <Th>Number</Th>
          <Th></Th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <Td>{user.username}</Td>
            <Td>{user.email}</Td>
            <Td>{user.number}</Td>
            <Td><button>Delete</button></Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UsersTable;
