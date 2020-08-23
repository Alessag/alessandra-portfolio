import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import Skills from './Skills';
import '../assets/styles/components/Experience.scss';
import { Button } from './Button';

const Experience = ({ skills }) => {
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
            href='https://drive.google.com/file/d/1Zox0mZ26OXPvftvi5Q8OFNlrmJPP7xVJ/view?usp=sharing'
            target='_blank'
          >
            Download CV
          </Button>
        </Col>
        <Col md={6} className='experience__text text-justify'>
          <p>
            Consequat consequat esse mollit veniam exercitation laboris enim sit
            aliqua id commodo. Qui commodo aliquip minim irure eiusmod.
          </p>
          <p>
            loremDolore non nisi incididunt adipisicing nulla. Culpa sint magna
            magna nulla incididunt. Amet ipsum cupidatat reprehenderit Lorem do
            aboris do aute velit quis est.
          </p>
          <p>
            Incididunt ea et aliquip cupidatat dolore consequat cupidatat
            mollit.
          </p>
          <Skills skills={skills} />
        </Col>
      </Row>
    </Container>
  );
};

Experience.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default Experience;
