import { useState } from 'react';
import styled from 'styled-components';
import { useTransition, animated, config } from 'react-spring';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import { RxCrossCircled } from 'react-icons/rx';
import img from '../assests/ferrari.png'
const CarsList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const carsDatas = [
    {
      "price": 100000,
      "year": 2008,
      "carName": "Ferrari Enzo",
      "engine":"v12",
      "topSpeed":"280Mph",
      "milage":"5Mpl"
    },
    {
      "price": 50000,
      "year": 2015,
      "carName": "Audi R8",
      "engine":"v8",
      "topSpeed":"205Mph",
      "milage":"10Mpl"
    },
    {
      "price": 250000,
      "year": 2022,
      "carName": "Bugatti Chiron",
      "engine":"w16",
      "topSpeed":"261Mph",
      "milage":"2Mpl"
    },
    {
      "price": 75000,
      "year": 2019,
      "carName": "Tesla Model S",
      "engine":"electric",
      "topSpeed":"163Mph",
      "milage":"350Mpl"
    },
    {
      "price": 30000,
      "year": 2020,
      "carName": "Toyota Camry",
      "engine":"v6",
      "topSpeed":"130Mph",
      "milage":"25Mpl"
    },
    {
      "price": 40000,
      "year": 2017,
      "carName": "Honda Accord",
      "engine":"inline-4",
      "topSpeed":"120Mph",
      "milage":"30Mpl"
    },
    {
      "price": 200000,
      "year": 2021,
      "carName": "Porsche 911",
      "engine":"flat-6",
      "topSpeed":"191Mph",
      "milage":"18Mpl"
    },
    {
      "price": 150000,
      "year": 2022,
      "carName": "Lamborghini Huracan",
      "engine":"v10",
      "topSpeed":"201Mph",
      "milage":"8Mpl"
    },
    {
      "price": 35000,
      "year": 2019,
      "carName": "Ford Mustang",
      "engine":"v8",
      "topSpeed":"155Mph",
      "milage":"20Mpl"
    },
    {
      "price": 45000,
      "year": 2020,
      "carName": "Chevrolet Camaro",
      "engine":"v8",
      "topSpeed":"165Mph",
      "milage":"18Mpl"
    },{
      "price": 100000,
      "year": 2008,
      "carName": "Ferrari Enzo",
      "engine":"v12",
      "topSpeed":"280Mph",
      "milage":"5Mpl"
    },
    {
      "price": 50000,
      "year": 2015,
      "carName": "Audi R8",
      "engine":"v8",
      "topSpeed":"205Mph",
      "milage":"10Mpl"
    },
    {
      "price": 250000,
      "year": 2022,
      "carName": "Bugatti Chiron",
      "engine":"w16",
      "topSpeed":"261Mph",
      "milage":"2Mpl"
    },
    {
      "price": 75000,
      "year": 2019,
      "carName": "Tesla Model S",
      "engine":"electric",
      "topSpeed":"163Mph",
      "milage":"350Mpl"
    },
    {
      "price": 30000,
      "year": 2020,
      "carName": "Toyota Camry",
      "engine":"v6",
      "topSpeed":"130Mph",
      "milage":"25Mpl"
    },
    {
      "price": 40000,
      "year": 2017,
      "carName": "Honda Accord",
      "engine":"inline-4",
      "topSpeed":"120Mph",
      "milage":"30Mpl"
    },
    {
      "price": 200000,
      "year": 2021,
      "carName": "Porsche 911",
      "engine":"flat-6",
      "topSpeed":"191Mph",
      "milage":"18Mpl"
    },
    {
      "price": 150000,
      "year": 2022,
      "carName": "Lamborghini Huracan",
      "engine":"v10",
      "topSpeed":"201Mph",
      "milage":"8Mpl"
    },
    {
      "price": 35000,
      "year": 2019,
      "carName": "Ford Mustang",
      "engine":"v8",
      "topSpeed":"155Mph",
      "milage":"20Mpl"
    },
    {
      "price": 45000,
      "year": 2020,
      "carName": "Chevrolet Camaro",
      "engine":"v8",
      "topSpeed":"165Mph",
      "milage":"18Mpl"
    }
  ];
  
  

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
        <div class="searchbar"></div>
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
              <div class="details"></div>
              
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
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
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
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

 

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
      width: 45vw;
      margin-top: -5rem;
      
    }
  }
`;

export default CarsList;
