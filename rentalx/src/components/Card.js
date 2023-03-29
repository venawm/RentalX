import React from 'react'
import 'styled-components';
import styled from 'styled-components';
import img from '../assests/img.jpg'
import ReactStars from 'react-stars'
const Card=({setIsOpen})=> {
console.log(setIsOpen)
  const price = 100000;
  const year = 2008;
  const carName = "Ferrari Enzo";
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <Main>
        <img src = {img} alt="" />
        <div className="text">
          <span className="price">Rs {price} <span className="days">/Days</span></span>
          <span className="price">{carName} <span className="days">{year}</span></span>
          <ReactStars className='stars' size={30} edit={false} value={3} ></ReactStars>
          <button onClick={handleOpenModal}>View more</button>
        </div>

    </Main>
  )
}
const Main = styled.div`
  margin: 0 0.5rem 0 0.5rem;
  margin-top: 2rem;
    padding: 0;
  background-color: #F5F5F5;
  width: 18vw;
  height: 52vh;
  border-radius: 15px;
  transition: transform .2s;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  :hover{
    transform: scale(1.1);
  }
  img{
    width: 100%;
    height: 30vh;
    object-fit: cover;
    border-radius: 15px;
  }
  .text{
    display: flex;
    flex-direction: column;
    text-align: left;
    span{
      background-color: #F5F5F5;
      font-size: larger;
      font-weight: 700;
      .days{
        font-size:medium;
        color: #FF5722;
      }
    }
    .stars{
      background-color: #F5F5F5;
    }
    button{
        border: none;
        background-color: #FF5722;
        height: 3rem;
        width: 100%;
        font-size: medium;
        font-weight: 700;
        color: #EEEEEE;
       
        border-radius: 10px;
        :hover{
            cursor: pointer;
            background-color: #ffb39b;          
        }
    }
  }
`;

export default Card