import React, { useState, useEffect } from 'react'
import RequestCard from './RequestsCards'
import axios from 'axios'
import styled from 'styled-components'

const RentRequests = () => {
  const [rentData, setRentData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/requests')
      .then((response) => {
        setRentData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <Main>
      {rentData.map((request, index) => (
        <RequestCard
        rentData={rentData}
        setRentData={setRentData}
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
  )
}
const Main = styled.div`
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
`

export default RentRequests
