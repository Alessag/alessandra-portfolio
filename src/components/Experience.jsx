import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import Skills from './Skills';
import '../assets/styles/components/Experience.scss';
import { Button } from './Button';

const Experience = ({ skills, experience }) => {
  return (
    <Container className='experience'>
      <h1 className='experience__title'>About Me</h1>
      <Row>
        <Col md={6} className='experience__info text-center'>
          <img
            src='https://avatars2.githubusercontent.com/u/17497470?s=460&u=c196f5794f01693344d53ac403cf22660b626b59&v=4'
            alt='Alessandra'
            className='img-fluid'
          />
          <Button
            href='https://www.dropbox.com/s/releha84jcv6n3i/Alessandra%20Amicarella.pdf?dl=0'
            target='_blank'
          >
            Download CV
          </Button>
        </Col>
        <Col md={6} className='experience__text text-justify'>
          {experience.map((item) => (
            <p key={item.id}>{item.paragraph}</p>
          ))}
          <Skills skills={skills} />
        </Col>
      </Row>
    </Container>
  );
};

Experience.propTypes = {
  skills: PropTypes.array.isRequired,
  experience: PropTypes.array.isRequired,
};

export default Experience;
