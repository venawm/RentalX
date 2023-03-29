import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import {RxCrossCircled} from 'react-icons/rx'

const CarsList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <NavBar />
      <Main>
        <p className="heading">Our Vehicle Collections</p>
        <div className="cards">
          <Card setIsOpen={setIsOpen} />
        </div>
      </Main>
      {isOpen && (
        <>
          <Backdrop />
          <Model>
              <RxCrossCircled className='button' onClick={handleCloseModal}/>
          </Model>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1;
`;

const Main = styled.div`
  margin-top: 5vh;
  text-align: center;

  .heading {
    color: #ff5722;
    font-size: xx-large;
    font-weight: 800;
  }

  .cards {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const Model = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 80vh;
  background-color: #f5f5f5;
  border-radius: 20px;
  z-index: 2;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 1.5rem;
  display: flex;
  


  p {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .button{
    margin-left: 62vw;
    :hover{
      
    }
  }

  /* button {
    font-size: 1.5rem;
    font-weight: 700;
    padding: 1rem 2rem;
    background-color: #ff5722;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #ff8a65;
    }
  } */

`;

export default CarsList;
