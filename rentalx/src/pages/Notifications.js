import React, { useState, useEffect } from 'react'
import RequestCard2 from '../components/Admin/RequestsCards2'
import NavBar from '../components/NavBar'
import axios from 'axios'
import styled from 'styled-components'
import Cookies from 'js-cookie';
const Sales = () => {
  const [rentData, setRentData] = useState([])


  useEffect(() => {
    const id = Cookies.get('user');
    console.log(id)
    axios.get(`http://localhost:5000/sales?id=${id}`)
      .then((response) => {
        setRentData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
    <NavBar/>
    <Main>

      {rentData.map((request, index) => (
        <RequestCard2
          key={index}
          userid={request.userid}
          id={request.id}
          username={request.username}
          carname={request.carname}
          start_date={request.start_date}
          end_date={request.end_date}
          url={request.url}
          email = {request.email}
        />
      ))}
    </Main>
    </div>
  )
}
const Main = styled.div`
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
`

export default Sales
