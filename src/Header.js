import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background: linear-gradient(to bottom, #333, #222);
  color: #fff;
  padding: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AnimatedButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  background-color: #f06;
  color: #fff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d04;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.6rem 1rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Gonesh Chandra Das</Title>
      <Subtitle>Software Engineer | Web Developer</Subtitle>
    </HeaderContainer>
  );
};

export default Header;
