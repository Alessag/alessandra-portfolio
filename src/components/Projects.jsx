import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import cover from '../assets/images/01.png';
import '../assets/styles/components/Projects.scss';

const Projects = ({ projects }) => (
  <Container>
    <h1 className='projects-content__title display-3'>Personal Projects</h1>
    <Row className='justify-content-center'>
      {projects.map((item) => (
        <Col key={item.id} md='6' lg='4' className='mb-2'>
          <img
            src={cover}
            className='img-fluid project-image'
            alt={item.title}
          />
        </Col>
      ))}
    </Row>
  </Container>
);

Projects.propTypes = {
  projects: PropTypes.node.isRequired,
};

export default Projects;
