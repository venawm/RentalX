import { useState } from 'react';
import styled from 'styled-components';
import { useTransition, animated, config } from 'react-spring';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import { RxCrossCircled } from 'react-icons/rx';

const CarsList = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <Card setIsOpen={setIsOpen} />
        </div>
      </Main>
      {modalTransition((style, item) =>
        item ? (
          <ModalBackdrop onClick={handleCloseModal}>
            <Modal style={style}>
              <RxCrossCircled className="button" onClick={handleCloseModal} />
              <p>Modal Content Here</p>
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
    justify-content: space-between;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    color: #ff5722;
    cursor: pointer;
  }
`;

export default CarsList;
