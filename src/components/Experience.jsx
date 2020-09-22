import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import Skills from './Skills';
import '../assets/styles/components/Experience.scss';
import { Button } from './Button';
import photoAle from '../assets/images/alessandra.jpg';

const Experience = ({ skills, experience, urlCv }) => {
  return (
    <Container className='experience'>
      <h1 className='secondary-title'>About Me</h1>
      <Row>
        <Col md={6} className='experience__info text-center'>
          <img src={photoAle} alt='Alessandra' className='img-fluid' />
          <Button href={urlCv} target='_blank'>
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
  urlCv: PropTypes.string.isRequired,
};

export default Experience;
