/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Badge } from 'reactstrap';
import '../assets/styles/components/Projects.scss';
import { PrimaryButton } from './Button';

const Projects = ({ projects }) => {
  return (
    <Container className='project-container'>
      <h1 className='secondary-title'>Recent projects</h1>
      <Row className='justify-content-center'>
        {projects.reverse().map((item) => (
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
                <div className='tech-badge'>
                  {item.tech.map((subitem) => (
                    <Badge key={subitem.id} color='light'>
                      <a
                        href={subitem.url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {subitem.name}
                      </a>
                    </Badge>
                  ))}
                </div>
                <div className='details__buttons'>
                  <PrimaryButton
                    href={item.url}
                    target='_blank'
                    className='card-button'
                  >
                    Demo
                  </PrimaryButton>
                  <PrimaryButton
                    href={item.repo}
                    target='_blank'
                    className='card-button'
                  >
                    Code
                  </PrimaryButton>
                </div>
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
