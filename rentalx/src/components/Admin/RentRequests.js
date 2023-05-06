import React, { useState, useEffect } from 'react'
import RequestCard from './RequestsCards'
import axios from 'axios'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
const RentRequests = () => {
  const [rentData, setRentData] = useState([])
  const [reject, setReject] = useState('')

  useEffect(() => {
    axios.get('http://localhost:5000/requests')
      .then((response) => {
        setRentData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  if(reject==='reject'){
  toast('Request Rejected sucessfully', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
    setReject(false)
  }
  if(reject==='accept'){
    toast('Request accepted sucessfully', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      setReject(false)
    }
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
          price = {request.price}
          email = {request.email}
          setReject = {setReject}
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
