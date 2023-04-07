import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTransition, animated, config } from 'react-spring';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import axios from 'axios';
import { RxCrossCircled } from 'react-icons/rx';
import { TbEngine, TbCurrencyRupee } from 'react-icons/tb';
import { BsSpeedometer2, BsFuelPump, BsCalendarDate } from 'react-icons/bs';
import img from '../assests/ferrari.png';

const CarsList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});
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
  
  

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const modalTransition = useTransition(isOpen, {
    from: { opacity: 0, transform: 'translate(-50%, -60%) scale(0.8)' },
    enter: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
    leave: { opacity: 0, transform: 'translate(-50%, -60%) scale(0.8)' },
    config: config.stiff,
  });

  return (
    <Container>
      <NavBar />
      <Main>
        <p className="heading">Our Vehicle Collections</p>
        <div className="cards">
          {carsDatas.map((carData)=>{
              return <Card carData={carData} setModalData={setModalData} setIsOpen={setIsOpen} />
          })}
          
        </div>
      </Main>
      {modalTransition((style, item) =>
        item ? (
          <ModalBackdrop>
            <Modal style={style}>
              <RxCrossCircled className="button" onClick={handleCloseModal} />
              <div class="modalContent">
                <h1>{modalData.name}</h1>
                <img src={img} alt=""></img>
              </div>
              <div class="details">
                <ul>
                  <li><TbCurrencyRupee className='icons'/>{modalData.price}</li>
                  <li><TbEngine className='icons'/>{modalData.engine}</li>
                  <li><BsSpeedometer2 className='icons'/>{modalData.top_speed}</li>
                  <li><BsFuelPump className='icons'/>{modalData.mileage}</li>
                  <li><BsCalendarDate className='icons'/>{modalData.year}</li>
                </ul>
                <div className='dis'>
                  <p className='description'>{modalData.description}</p>
                  <button>Rent now</button>
                </div>
               
              </div>
              
            </Modal>
          </ModalBackdrop>
        ) : null
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const ModalBackdrop = styled.div`

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
    margin-top: -2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
  }
`;

const Modal = styled(animated.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  min-height: 80vh;
  max-height:100vh;
  background-color: #f5f5f5;
  border-radius: 20px;
  z-index: 2;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 1.5rem;
  .button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    color: #ff5722;
    cursor: pointer;
    background-color: #f5f5f5;
  }
  .modalContent{
    margin-top: 3vw;
    background-color: #f5f5f5;
    text-align: center;
    h1{
    background-color: #f5f5f5;

    }
    img{
      
      background-color: transparent;
      width: 35vw;
      margin-top: -5rem;
      
    }

  }
  .details{
      ul{
        background-color: #f5f5f5;
        list-style-type: none;
        display: flex;
        align-items:center;
        justify-content:space-evenly;
        li{
          background-color: #f5f5f5;
          display: flex;
          align-items:center;
          justify-content:center;
         .icons{
            background-color: #f5f5f5;
            font-size:2rem;
            margin-right:5px;

         }
          
        }
      }
    }
    .dis{
      display:flex;
      flex-direction:column;
      background-color: #f5f5f5;
      .description{
      background-color: #f5f5f5;
      margin-top:10px;
      max-height:200px;
    }
    button{
        border: none;
        margin-top:50px;
        margin-left:25%;
        background-color: #FF5722;
        height: 4rem;
        width: 30vw;
        font-size: x-large;
        font-weight: 900;
        color: #EEEEEE;
        
       
        border-radius: 10px;
        :hover{
            cursor: pointer;
            background-color: #ffb39b;          
        }
    }
    }
   
    
`;

export default CarsList;
