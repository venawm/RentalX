import React from 'react'
import 'styled-components';
import styled from 'styled-components';
import ReactStars from 'react-stars'
const Card=({setIsOpen,carData,setModalData})=> {
  const handleOpenModal = () => {
    setModalData(carData)
    setIsOpen(true);
  };

  return (
    <Main>
        <img src = {carData.url} alt="" />
        <div className="text">
          <span className="price">{carData.name} <span className="days">{carData.year}</span></span>
          <span className="price">Rs {carData.price} <span className="days">/Days</span></span>
          <ReactStars className='stars' size={30} edit={false} value={3} ></ReactStars>
          <button onClick={handleOpenModal}>View Details</button>
        </div>

    </Main>
  )
}
const Main = styled.div`
margin: 0px 0.5rem 0px 0.5rem;
  margin-top: 6rem;
  padding: 10px;
  background-color: #F5F5F5;
  width: 20rem;
  height: 28rem;
  border-radius: 15px;
  transition: transform .2s;
  box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;
  :hover{
    transform: scale(1.03);
  }
  img{
    width: 100%;
    height: 30vh;
    object-fit: cover;
    border-radius: 15px 15px 0px 0px;
  }
  .stars{
    background-color: #F5F5F5;
  }
  .text{
    border-radius: 0px 0px 15px 15px;
    font-size: x-large;
    margin-top: 5px;
    display: flex;
    background-color: #F5F5F5;
    flex-direction: column;
    text-align: left;
    padding: 10px;
    span{
      background-color: #F5F5F5;
      font-size: 1.4rem;
      font-weight: 700;
      .days{
        font-size:medium;
        color: #FF5722;
      }
    }
  
    button{
      border: none;
    background-color: #FF5722;
    height: 65px;
    width: 100%;
    font-size: x-large;
    font-weight: 700;
    color: #EEEEEE;
    margin-top: 15px;
    border-radius: 15px;
    /* border-radius: 0px 0px 5px 5px; */
    border-radius: 15px;
        :hover{
            cursor: pointer;
            background-color: #ffb39b;          
        }
    }
  }
  
`;

export default Card