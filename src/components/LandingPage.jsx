import React from 'react';
import PropTypes from 'prop-types';
import Info from './Info';
import Projects from './Projects';
import '../assets/styles/components/LandingPage.scss';

function LandingPage({ projects, name, profession, bio }) {
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
      <Info name={name} profession={profession} bio={bio} />
      <Projects projects={projects} />
    </div>
  );
}

LandingPage.propTypes = {
  projects: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default LandingPage;
