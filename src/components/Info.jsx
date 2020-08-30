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
          <h3 className='sub-title'>Alessandra Amicarella</h3>
          <h1 className='title '>Front End Developer</h1>
          <p className='text'>
            I am a computer engineering student, I am passionate about the
            digital world and discover new techs. Actually I am making inroads
            hunting in new projects with React.
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
