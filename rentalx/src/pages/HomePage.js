import React,{useEffect} from 'react'
import axios from 'axios';
import 'styled-components';
import styled from 'styled-components';
import Car from '../assests/car.png'
import NavBar from '../components/NavBar';
import Cookies from 'js-cookie';
const HomePage=()=> {
    const token = Cookies.get('token');
    console.log(token)

    useEffect(() => {
        axios.post('http://localhost:5000/verify', {}, {
          headers: {
            token: `${token}`
          }
        })
        .then(response => console.log(response))
        .catch(error => console.error(error));
      }, []);
      

  return (
    <div className="home">
       <NavBar/>
        <Main>
            <div className="main">
                <h1>Search and find your  </h1>
                <h1>best car rental with</h1>
                <h1>RentalX</h1>
                <p>
                Rent a car with us and explore your destination hassle-free. Our fleet includes a variety of vehicles at competitive rates, and our experienced team is dedicated to providing excellent customer service. Book now and enjoy your journey with ease.
                </p>
                <div className="buttons">
                    <a href="/carslist">See all cars</a>
                </div>
            </div>
            <div className="secondary">
                <img src={Car} alt="" />
                <div className="orange"></div>
            </div>
            
        </Main>
    </div>
  )
}

const Main = styled.div`
    margin-top: 20px;
    display: flex;
    .main{
        margin-top: 100px;
        width: 60vw;
       p{
        margin-top: 20px;
        width: 35vw;
       }
       .buttons{
        text-align:center;
        margin-top: 10vw;
        display: flex;
        align-items:center;
       
        .search{
            
        }
        a{
            text-decoration: none;
            /* margin-left: -15rem; */
            font-size: large;
            font-weight:800 ;
            :hover{
                
                border-bottom: 4px solid #FF5722;
                padding-bottom: 2px; 
                
            }
            }
    }
    }
    .secondary{
        overflow: hidden;
        width: 40vw;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        margin-right: -3rem;
        position: relative;
        img{
            width: 40vw;
            position: absolute;
            top: 7rem;
            right: -15px;
            background-color: transparent;
            }
        .orange{
            background-color: #FF5722;
            width: 25vw;
            height: 40vw;
            border-top-left-radius:30px;
            border-bottom-left-radius:30px;

        }
    }
 
`;

export default HomePage