import React from 'react'
import 'styled-components';
import styled from 'styled-components';
import img from '../../assests/img.jpg'

const Card=({setIsOpen,carData,setModalData})=> {

  return (
    <Main>
        <img src = {carData.url} alt="" />
        <div className="text">
          <span className="price">{carData.name} <span className="days">{carData.year}</span></span>
          <span className="price">Rs {carData.price} <span className="days">/Days</span></span>
          <div class="button">
            <button>Update</button>
            <button className='delete'>Delete</button>
          </div>
          
        </div>

    </Main>
  )
}
const Main = styled.div`
  padding: 10px;
  background-color: #F5F5F5;
  width: 25rem;
  height: 25rem;
  border-radius: 15px;
  transition: transform .2s;
  box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;
  margin: 10px;


  img{
    width: 100%;
    height: 15rem;
    object-fit: cover;
    border-radius: 15px 15px 0px 0px;
  }
  .stars{
    background-color: #F5F5F5;
  }
  .text{
    border-radius: 0px 0px 15px 15px;
    font-size: large;
    margin-top: 1px;
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
        font-size:large;
        color: #FF5722;
      }
    }
  .button{
    background-color: #F5F5F5;
    display:flex;
    justify-content: space-between;
    button{
      border: none;
    background-color: green;
    height: 40px;
    width: 45%;
    font-size: small;
    font-weight: 700;
    color: #EEEEEE;
    margin-top: 5px;
    border-radius: 15px;
    /* border-radius: 0px 0px 5px 5px; */
    border-radius: 15px;
        :hover{
            cursor: pointer;
            background-color: #ffb39b;          
        }
    }
    .delete{
      background-color: red;
    }

  }

  }
  
`;

export default Card