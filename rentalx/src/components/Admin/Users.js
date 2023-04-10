import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const Th = styled.th`
  text-align: left;
  background-color: #f2f2f2;
  padding: 8px;
`;

const Td = styled.td`
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const UsersTable = () => {
    const users = [
        { username: 'john', email: 'john@example.com', number: '555-1234' },
        { username: 'jane', email: 'jane@example.com', number: '555-5678' },
        { username: 'bob', email: 'bob@example.com', number: '555-9012' }
      ];
  return (
    <Table>
      <thead>
        <tr>
          <Th>Username</Th>
          <Th>Email</Th>
          <Th>Number</Th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <Td>{user.username}</Td>
            <Td>{user.email}</Td>
            <Td>{user.number}</Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UsersTable;
