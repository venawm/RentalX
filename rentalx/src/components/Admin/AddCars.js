import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Image } from 'cloudinary-react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .form{
    display: felx;
    flex-direction: row;
  }
`;

const Input = styled.input`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  background-color: #0077cc;
  color: white;
  font-size: 18px;
  cursor: pointer;
`;

function CarForm() {
  const [carData, setCarData] = useState({
    carName: '',
    year: '',
    mileage: '',
    engine: '',
    description: '',
    topSpeed: '',
    image: null,
    imageUrl: '',
  });
  
  useEffect(() => {
    if (carData.imageUrl) {
      axios.post('http://localhost:5000/addcars', carData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [carData.imageUrl]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if required fields have a value
    if (!carData.carName || !carData.year || !carData.mileage || !carData.engine || !carData.description || !carData.topSpeed) {
      alert('Please fill in all required fields');
      return;
    }
    // Upload the image to Cloudinary
    const formData = new FormData();
    formData.append('file', carData.image);
    formData.append('upload_preset', 'ml_default');
    formData.append('cloud_name', 'dltb4enjt');
    fetch('https://api.cloudinary.com/v1_1/dltb4enjt/image/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.url);
        setCarData((prevState) => ({
          ...prevState,
          imageUrl: data.url,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  const handleChange = (event) => {
    if (event.target.name === 'image') {
      setCarData({
        
        ...carData,
        [event.target.name]: event.target.files[0],
      });
    } else {
      setCarData({
        ...carData,
        [event.target.name]: event.target.value,
      });
    }
  };
  
  



  return (
    <Container>
      <form className='form' onSubmit={handleSubmit}>
        <Label htmlFor="carName">Car Name:</Label>
        <Input type="text" id="carName" name="carName"  value={carData.carName} onChange={handleChange} required/>

        <Label htmlFor="year">Year:</Label>
        <Input type="text" id="year" name="year" value={carData.year} onChange={handleChange} required />

        <Label htmlFor="mileage">Mileage:</Label>
        <Input type="text" id="mileage" name="mileage" value={carData.mileage} onChange={handleChange} required />

        <Label htmlFor="engine">Engine:</Label>
        <Input type="text" id="engine" name="engine" value={carData.engine} onChange={handleChange} required />

        <Label htmlFor="description">Description:</Label>
        <Input type="text" id="description" name="description" value={carData.description} onChange={handleChange} required />

        <Label htmlFor="topSpeed">Top Speed:</Label>
        <Input type="text" id="topSpeed" name="topSpeed" value={carData.topSpeed} onChange={handleChange} required />

        <Label htmlFor="price">Price:</Label>
        <Input type="text" id="price" name="price" value={carData.price} onChange={handleChange} required />

        <Label htmlFor="image">Image:</Label>
        <Input type="file" id="image" name="image" onChange={handleChange} required />

        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
}

export default CarForm;