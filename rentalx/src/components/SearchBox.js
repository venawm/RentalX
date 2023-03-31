import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { GoSearch } from 'react-icons/go';

const SearchBox = styled.div`
  width: 400px;
  height: 100px;
  position: relative;
  background:transparent;
`;

const Input = styled.input`
  position: absolute;
  top: 20px;
  right: 50px;
  box-sizing: border-box;
  width: 0px;
  height: 63px;
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
    width: 350px;
    right: 100px;
  `}
`;

const Button = styled.div`
 position: absolute;
  width: 80px;
  height: 80px;
  background: #FF5722;
  border-radius: 50%;
  right: 45px;
  top: 10px;
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
    font-size:2rem;
    transition: all 0.8s ease;
    
  }

  &:hover {
    background-color: #45a05d;
    .icon{
    background: #45a05d;
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

const Search = () => {
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
        onChange={() => {}}
      />
      <Indicator active={isActive} />
      <Button onClick={handleClick} animate={isActive}>
        <GoSearch className='icon' />
      </Button>
    </SearchBox>
  );
};

export default Search;
