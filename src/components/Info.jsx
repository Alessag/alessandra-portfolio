import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { PrimaryButton } from './Button';
import AlePhoto from '../assets/images/alessandra.jpg';
import '../assets/styles/components/Info.scss';

const Info = () => {
  return (
    <Container className='info-container'>
      <Row>
        <Col>
          <h1 className='title'>
            Alessandra <br />
            Amicarella
          </h1>
          <h2 className='sub-title'>Front End Developer</h2>
          <p className='text'>
            I am a computer engineering student, I am passionate about the
            digital world and discover new techs. Actually I am making inroads
            hunting in new projects with React.
          </p>
          <PrimaryButton href='https://google.com'>View Projects</PrimaryButton>{' '}
          or{' '}
          <PrimaryButton href='https://google.com'>Read About Me</PrimaryButton>
        </Col>
        <Col>
          {/* <div className='triangle' /> */}
          <img src={AlePhoto} className='img-fluid' alt='Alessandra' />
        </Col>
      </Row>
    </Container>
  );
};

export default Info;
