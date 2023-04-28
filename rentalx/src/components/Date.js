import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  .dates{
    display: flex;
    background-color: #f5f5f5;
    .date{
        background-color: #f5f5f5;
        max-width: 150px;
        margin-left: 5px;
        height: 25px;
        padding: 5px;
        border-radius: 20px;
        border: solid 1px black;
        
    }
  }
`;

const Label = styled.label`
    background-color: #f5f5f5;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Date = ({ startDate, endDate, setStartDate, setEndDate }) => {
    const currentDateObj =
     new window.Date();
  return (
    <Container>
      <Label>Select a date range:</Label>
      <div class="dates">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        minDate={currentDateObj}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        className='date'
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        className='date'
      />
      </div>
    </Container>
  );
};

export default Date;
