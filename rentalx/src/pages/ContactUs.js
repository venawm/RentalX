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
          Name:
          <Input type="text" name="name" />
        </Label>
        <Label>
          Email:
          <Input type="email" name="email" />
        </Label>
        <Label>
          Message:
          <Textarea name="message"></Textarea>
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
  background-color: #008cba;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #006799;
  }
`;

export default ContactUs;
