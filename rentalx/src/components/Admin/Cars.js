import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card';
import axios from 'axios';


const Cars = () => {
  const [carsDatas, setCarsDatas] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/cars')
      .then((response) => {
        setCarsDatas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
      <Main>
        <div className="cards">
          {carsDatas.map((carData)=>{
              return <Card  carData={carData} />
          })}
          
        </div>
      </Main>
  );
};
const Main = styled.div`
  width: 100%;
  margin-top: 5vh;
  text-align: center;

  .cards {
    margin-top: -2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
 
  }
`;

export default Cars;
