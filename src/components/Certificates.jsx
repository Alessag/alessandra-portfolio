import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardBody, Container, Row, Col } from 'reactstrap';
import cover from '../assets/images/fcc-js.png';
import '../assets/styles/components/Certificates.scss';

const Certificates = ({ certificates }) => (
  <Container>
    <h1 className='certificates-content__title display-3'>Certifications</h1>
    <Row className='justify-content-center'>
      {certificates.map((item) => (
        <Col key={item.id} md='6' lg='4' className='mb-2'>
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
              <a href={item.url} className='fill'>
                View certificate
              </a>
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
