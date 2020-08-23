/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import '../assets/styles/components/Projects.scss';

const Projects = ({ projects }) => {
  return (
    <Container>
      <h1 className='projects-content__title'>Personal Projects</h1>
      <Row className='justify-content-center'>
        {projects.map((item) => (
          <Col key={item.id} md='6' lg='4' className='projects-content__card'>
            <img
              src={require(`../assets/images/projects/${item.img}`)}
              className='img-fluid project-image'
              alt={item.title}
            />
            <h3>{item.title}</h3>
            {/* <p>{item.tecnologies}</p> */}
            <a href={item.url}>Demo</a>
            <a href={item.url}>Code</a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Projects;
