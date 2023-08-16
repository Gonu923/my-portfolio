import React from 'react';
import styled from 'styled-components';

const ExperiencesContainer = styled.section`
  background-color: #f9f9f9;
  padding: 3rem 0;
  align-items: center;
  text-align: center;
`;

const ExperienceCard = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

const CompanyName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Position = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

const Duration = styled.p`
  font-size: 1rem;
  color: #777;
`;

const Description = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
  margin-top: 1rem;
`;

const Experience = ({ experiences }) => {
  return (
    <ExperiencesContainer>
      <h2>Professional Experience</h2>
      {experiences.map((experience, index) => (
        <ExperienceCard key={index}>
          <CompanyName>{experience.companyName}</CompanyName>
          <Position>{experience.position}</Position>
          <Duration>{experience.duration}</Duration>
          <Description>
            {experience.tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </Description>
        </ExperienceCard>
      ))}
    </ExperiencesContainer>
  );
};

export default Experience;
