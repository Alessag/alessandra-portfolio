import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import Info from './Info';
import Projects from './Projects';
import '../assets/styles/components/LandingPage.scss';

function LandingPage({ projects }) {
  return (
    <div className='home-page'>
      <div className='social-container'>
        <ul>
          <li>
            <a
              href='https://www.linkedin.com/in/AlessandraAmicarella/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href='https://t.me/Alessamica'
              target='_blank'
              rel='noopener noreferrer'
            >
              Telegram
            </a>
          </li>
          <li>
            <a
              href='https://github.com/alessag'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
          </li>
          <li>
            <a
              href='https://instagram.com/amicarellaa'
              target='_blank'
              rel='noopener noreferrer'
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <Container className='home-container'>
        <div className='cube'>Front End Developer</div>
      </Container>
      <Info />
      <Projects projects={projects} />
    </div>
  );
}

LandingPage.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default LandingPage;
