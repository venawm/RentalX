import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  max-height  :20rem ;
  width: 20rem;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  img{
    max-height: 10rem;
  }
`;

const CardTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
  background-color: #f5f5f5;
`;

const CardText = styled.p`
  font-size: 16px;
  margin-bottom: 4px;
  background-color: #f5f5f5;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f5;

`;

const AcceptButton = styled.button`
  background-color: #4CAF50;
  width: 50%;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px;
  margin-right: 8px;
  cursor: pointer;
`;

const RejectButton = styled.button`
  background-color: #f44336;
  width: 50%;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
`;

const RequestCard = ({ userid,id,username, carname, start_date, end_date,url }) => {
  const acceptHandler=()=>{
    axios.post('http://localhost:5000/accept',{
      userid,
      id
    })

  }
  const rejectHandler=()=>{
    axios.post('http://localhost:5000/reject',{
      userid,
      id
    })
  }
  return (
    <CardContainer>
      <img src={url} alt=""></img>
      <CardText>Username: {username}</CardText>
      <CardText>Car Name: {carname}</CardText>
      <CardText>Start Date: {start_date}</CardText>
      <CardText>End Date: {end_date}</CardText>
      <ButtonContainer>
        <AcceptButton onClick={ acceptHandler}>Accept</AcceptButton>
        <RejectButton onClick={rejectHandler}>Reject</RejectButton>
      </ButtonContainer>
    </CardContainer>
  );
};

export default RequestCard;