import React from 'react'
import 'styled-components';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
const CarsList=()=> {
  return (
    <Main>
      <NavBar></NavBar>
      <div className="carlist">
        <p className="heading">Our Vehicle Collections</p>
        <div className='cards'>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </Main>
  )
}
const Main = styled.div`
  .carlist{
    margin-top: 5vh;
    text-align: center;
    p{
      color: #FF5722;
      font-size: xx-large;
      font-weight: 800;
    }
  }
  .cards{
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }


`;

export default CarsList