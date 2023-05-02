import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { GoSearch } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

const SearchBox = styled.div`
  width: 100px;
  height: 50px;
  position: relative;
  background:transparent;
`;

const Input = styled.input`
  position: absolute;
  top: 10px;
    right: 47px;
    box-sizing: border-box;
    width: 0px;
    height: 35px;
  padding: 0 20px;
  outline: none;
  font-size: 18px;
  border-radius: 50px;
  color: #29313a;
  border: 3px solid #FF5722;
  transition: all 0.8s ease;

  &::placeholder {
    color: #FF5722;
  }

  ${({ active }) =>
    active &&
    `
    width: 30vw;
    right: 110px;
  `}
`;

const Button = styled.div`
 position: absolute;
  width: 50px;
  height: 50px;
  background: #FF5722;
  border-radius: 50%;
  right: 45px;
  top: 5px;
  cursor: pointer;
  text-align: center;
  line-height: 80px;
  font-size: 20px;
  color: #fff;
  transition: all 0.8s ease;
  display: flex;
  justify-content:center;
  align-items:center;
  .icon{
    background-color: #FF5722;
    color: white !important;
    font-size:1rem;
    transition: all 0.8s ease;
    
  }

  &:hover {
    background-color: #c72e00;
    .icon{
    background: #c72e00;
    color:white;
    
  }
  }

  ${({ animate }) =>
    animate &&
    `
    transform: rotate(-360deg);
    right: 100px;
  `}
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(98, 212, 116, 0.7);
  }

  70% {
    box-shadow: 0 0 0 10px rgba(98, 212, 116, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(98, 212, 116, 0);
  }
`;

const Indicator = styled.div`
  position: absolute;
  right: 25px;
  top: 30px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #62d474;
  animation: ${pulse} 1.5s infinite;
  z-index: -1;

  ${({ active }) =>
    active &&
    `
    animation: none;
  `}
`;

const Search = ({searchText,setSearchText}) => {
  const navigate  = useNavigate()
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <SearchBox>
      <Input
        type="text"
        placeholder="Search"
        active={isActive}
        onKeyDownCapture={(event) => {
          if (event.key === 'Enter') {
            setSearchText(event.target.value)
            navigate('/carslist')
          }
        }}
        
      />
      <Indicator active={isActive} />
      <Button onClick={handleClick} animate={isActive}>
        <GoSearch className='icon' />
      </Button>
    </SearchBox>
  );
};

export default Search;
