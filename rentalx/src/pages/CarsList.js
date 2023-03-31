import { useState } from 'react';
import styled from 'styled-components';
import { useTransition, animated, config } from 'react-spring';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import { RxCrossCircled } from 'react-icons/rx';
import {TbEngine,TbCurrencyRupee} from 'react-icons/tb'
import {BsSpeedometer2,BsFuelPump,BsCalendarDate} from 'react-icons/bs'
import img from '../assests/ferrari.png'
import Search from '../components/SearchBox';
const CarsList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const carsDatas = [
    {
      "price": 100000,
      "year": 2008,
      "carName": "Ferrari Enzo",
      "engine": "v12",
      "topSpeed": "280Mph",
      "milage": "5Mpl",
      "description": "The Ferrari Enzo is a mid-engine sports car produced by Ferrari. Named after the company's founder, Enzo Ferrari, it was developed in 2002 using Formula One technology, such as a carbon-fibre body, F1-style electrohydraulic shift transmission, and carbon fibre-reinforced silicon carbide (C/SiC) ceramic composite disc brakes."
    },
    {
      "price": 50000,
      "year": 2015,
      "carName": "Audi R8",
      "engine": "v8",
      "topSpeed": "205Mph",
      "milage": "10Mpl",
      "description": "The Audi R8 is a mid-engine, 2-seater sports car, which uses Audi's trademark quattro permanent all-wheel drive system. It was introduced in 2006 and is based on the Lamborghini Gallardo platform. The R8 shares its platform with the Lamborghini Huracán."
    },
    {
      "price": 250000,
      "year": 2022,
      "carName": "Bugatti Chiron",
      "engine": "w16",
      "topSpeed": "261Mph",
      "milage": "2Mpl",
      "description": "The Bugatti Chiron is a mid-engine sports car developed and manufactured in Molsheim, France by French automobile manufacturer Bugatti Automobiles S.A.S. It is named after the Monegasque driver Louis Chiron. The Chiron has a top speed of 420 km/h (261 mph)."
    },
    {
      "price": 75000,
      "year": 2019,
      "carName": "Tesla Model S",
      "engine": "electric",
      "topSpeed": "163Mph",
      "milage": "350Mpl",
      "description": "The Tesla Model S is an all-electric luxury sedan produced by Tesla, Inc. It was introduced in 2012 and has been continuously updated since then. The Model S has won numerous awards and accolades for its performance, safety, and environmental friendliness."
    },
    {
      "price": 30000,
      "year": 2020,
      "carName": "Toyota Camry",
      "engine": "v6",
      "topSpeed": "130Mph",
      "milage": "25Mpl",
      "description": "The Toyota Camry is an mid-size car manufactured by Toyota since 1982. The Camry has been one of the best-selling cars in the United States since the late 1990s. It is known for its reliability, safety, and fuel efficiency."
    },
    {
      "price": 120000,
      "year": 2021,
      "carName": "Porsche 911 GT3 RS",
      "engine": "flat-6",
      "topSpeed": "198Mph",
      "milage": "12Mpl",
      "description": "The Porsche 911 GT3 RS is a high-performance version of the Porsche 911 sports car. It features a naturally aspirated 4.0-liter flat-six engine, rear-wheel drive, and a track-focused suspension setup."
    },
    {
      "price": 120000,
      "year": 2021,
      "carName": "Porsche 911 GT3 RS",
      "engine": "flat-6",
      "topSpeed": "198Mph",
      "milage": "12Mpl",
      "description": "The Porsche 911 GT3 RS is a high-performance version of the Porsche 911 sports car. It features a naturally aspirated 4.0-liter flat-six engine, rear-wheel drive, and a track-focused suspension setup."
    }
  ]
  
  
  

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
        <div className="search"><Search/></div>
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
                <h1>{modalData.carName}</h1>
                <img src={img} alt=""></img>
              </div>
              <div class="details">
                <ul>
                  <li><TbCurrencyRupee className='icons'/>{modalData.price}</li>
                  <li><TbEngine className='icons'/>{modalData.engine}</li>
                  <li><BsSpeedometer2 className='icons'/>{modalData.topSpeed}</li>
                  <li><BsFuelPump className='icons'/>{modalData.milage}</li>
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
  .search{
  width: 100%;
  display: flex;
  justify-content:flex-end;
}
`;

const Modal = styled(animated.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 80vh;
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
