import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import AlePhoto from '../assets/images/alessandra.jpg';
import '../assets/styles/components/Info.scss';

const Info = ({ name, profession, bio }) => {
  return (
    <Container className='info-container'>
      <Row>
        <Col sm='12' md='6' className='info-container__text'>
          <h6 className='sub-title'>Hi, I am {name}</h6>
          <h1 className='title '>{profession} That Love Challenges</h1>
          <p className='text'>{bio}</p>
          <Link to='/about'>Read About Me</Link>
        </Col>
        <Col sm='12' md='6' className='info-container__img'>
          <img src={AlePhoto} className='img-fluid' alt={name} />
        </Col>
      </Row>
    </Container>
  );
};

Info.propTypes = {
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default Info;
