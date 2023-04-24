import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useTable, useGlobalFilter } from 'react-table';

const Table = styled.table`
  overflow: scroll;
  border-collapse: collapse;
  width: 100%;

  height: 100px;
  margin: 0 auto;

  th {
    text-align: left;
    background-color: #f8f9fa;
    padding: 8px;
    height: 30px; /* set header height */
  }

  td {
    text-align: left;
    padding: 8px;
    border-bottom: 1px solid #ddd;
    height: 5px; /* set data row height */
    button {
      /* button styles */
    }
  }
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
  height: 5px;
  button {
    border: none;
    background-color: red;
    height: 3rem;
    width: 10vw;
    font-size: medium;
    font-weight: 700;
    color: #303841;
    border-radius: 10px;
    :hover {
      cursor: pointer;
      background-color: #ffb39b;
    }
  }
`;

const Search = styled.input`
  margin-bottom: 1rem;
  height: 2rem;
  width: 20rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 0 1rem;
`;

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState('');

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

  const data = useMemo(() => users, [users]);

  const columns = useMemo(
    () => [            {                Header: 'Username',                accessor: 'username',            },            {                Header: 'Email',                accessor: 'email',            },            {                Header: 'Number',                accessor: 'number',            },            {                Header: '',                accessor: 'delete',                Cell: ({ row }) => (                    <button onClick={() => handleDelete(row)}>Delete</button>                ),            },        ],
    []
  );

  const tableInstance = useTable({ columns, data }, useGlobalFilter);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter } =
    tableInstance;

  const handleDelete = (row) => {
    // delete the user from the server
    const updatedUsers = users.filter((user) => user.id !== row.original.id);
    setUsers(updatedUsers);
  };

  const handleSearch = (e) => {
    const value = e.target.value || '';
    setSearchValue(value);
    setGlobalFilter(value);
  };
  return (
    <>
      <Table {...getTableProps()}>
        
        <thead>
        <Search
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleSearch}/>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps()}>
                  {column.render('Header')}
                </Th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
   
    </>
  );
    }
export default UsersTable