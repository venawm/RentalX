import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';

const AboutSection = styled.section`
  padding: 50px;

`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`;

const Subtitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 30px;
`;

const AboutUs = () => {
  return (
    <div>
        <NavBar/>
    <AboutSection>
      <Title>About Us</Title>
      <Subtitle>Our Story</Subtitle>
      <Paragraph>
        At XYZ Car Rentals, we believe that getting around should be easy,
        affordable, and convenient. That's why we've built a platform that
        connects car rental providers with people who need to rent a car.
      </Paragraph>
      <Paragraph>
        Our journey began in 2010, when our founder, John Doe, noticed that
        many people were struggling to find reliable car rental options. He
        saw an opportunity to create a better experience for customers and
        car rental providers alike.
      </Paragraph>
      <Subtitle>Our Mission</Subtitle>
      <Paragraph>
        Our mission is to make car rental simple and accessible for everyone.
        We strive to provide a seamless and affordable rental experience by
        connecting you with the right vehicle for your needs, whether it's a
        compact car for a city adventure or a spacious SUV for a family road
        trip.
      </Paragraph>
      <Paragraph>
        We're committed to providing excellent customer service and building
        long-lasting relationships with our customers and partners. We believe
        that by putting people first and using innovative technology, we can
        make car rental a hassle-free experience for everyone.
      </Paragraph>
    </AboutSection>
    </div>
  );
};

export default AboutUs;
