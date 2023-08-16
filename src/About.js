import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  background-color: #f9f9f9;
  padding: 3rem 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const AnimatedButton = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.8rem 1.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <ContentWrapper>
        <Title>About Me</Title>
        <Description>
          I'm a passionate Software Engineer with a strong background in web development. My expertise includes HTML, CSS, JavaScript, PHP, various frontend and backend libraries and frameworks.
        </Description>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About;
