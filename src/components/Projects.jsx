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
            <div className='card'>
              <div className='imgBx'>
                <img
                  src={require(`../assets/images/projects/${item.img}`)}
                  className='img-fluid project-image'
                  alt={item.title}
                />
              </div>
              <div className='details'>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
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
