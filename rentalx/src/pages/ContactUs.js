import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';

const ContactUs = () => {
  return (
    <div>
    <NavBar/>
    <Container>

    
      <Heading>Contact Us</Heading>
      <Form>
        <Label>
          Name: <Input type="text" name="name" />
        </Label>
        <Label>
          Email: <Input type="email" name="email" />
        </Label>
        <Label>
          Message: <Textarea name="message"></Textarea>
        </Label>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
    
    </div>

  );
};
const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  flex-direction:column;
  justify-content:start;
  align-items:center;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Button = styled.button`
        border: none;
        background-color: #FF5722;
        height: 2.5rem;
        width: 15rem;
        font-size: medium;
        font-weight: 700;
       
        border-radius: 10px;
        :hover{
            cursor: pointer;
            background-color: #ffb39b;
            a{
                background-color: #ffb39b;
                color: #EEEEEE;
            }
        }
        a{
            background-color: #FF5722;
            color: #EEEEEE;
        }
`;

export default ContactUs;
