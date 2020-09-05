import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import AlePhoto from '../assets/images/alessandra.jpg';
import '../assets/styles/components/Info.scss';

const Info = () => {
  return (
    <Container className='info-container'>
      <Row>
        <Col sm='12' md='6' className='info-container__text'>
          <h6 className='sub-title'>Hi, I am Alessandra Amicarella</h6>
          <h1 className='title '>Front End Developer That Love Challenges</h1>
          <p className='text'>
            I am looking for opportunities to collaborate, support and grow
            professionally as frontend, with availability immediate.
          </p>
          <Link to='/about'>Read About Me</Link>
        </Col>
        <Col sm='12' md='6' className='info-container__img'>
          <img src={AlePhoto} className='img-fluid' alt='Alessandra' />
        </Col>
      </Row>
    </Container>
  );
};

export default Info;
