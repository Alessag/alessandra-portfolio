import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardBody, Container, Row, Col } from 'reactstrap';
import { Button } from './Button';
import '../assets/styles/components/Certificates.scss';
import cover from '../assets/images/fcc-js.png';

const Certificates = ({ certificates }) => (
  <Container className='certificates'>
    <h1 className='certificates__title'>Certifications</h1>
    <Row className='justify-content-center'>
      {certificates.map((item) => (
        <Col key={item.id} md='6' lg='4' className='certificates__card'>
          <Card className='card'>
            <CardImg
              top
              width='100%'
              className='img-fluid'
              src={cover}
              alt='certificate'
            />
            <CardBody>
              <h4 className='card-body__title'>{item.title}</h4>
              <h6 className='card-body__date text-muted'>{item.date}</h6>
              <Button href={item.url}>View certificate</Button>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

Certificates.propTypes = {
  certificates: PropTypes.node.isRequired,
};

export default Certificates;
