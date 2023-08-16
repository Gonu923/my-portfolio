import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 2rem 0;
  text-align: center;
`;

const Copyright = styled.p`
  font-size: 1rem;
`;

const SocialLinks = styled.div`
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  display: inline-block;
  margin: 0 0.5rem;
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const EmailLink = styled.a`
  display: block;
  margin-top: 1rem;
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      
      <EmailLink href="mailto:gonesh.chandra.das.cse@gmail.com">Contact me: gonesh.chandra.das.cse@gmail.com</EmailLink>
      <SocialLinks>
        <SocialLink href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </SocialLink>
        <SocialLink href="https://github.com/gonu923" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </SocialLink>
        {/* Add more social links as needed */}
      </SocialLinks>
      
      <Copyright>&copy; 2023 Gonesh Chandra Das. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
