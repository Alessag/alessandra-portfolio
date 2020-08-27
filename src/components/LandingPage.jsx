import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import Info from './Info';
import Projects from './Projects';
import '../assets/styles/components/LandingPage.scss';

function LandingPage({ projects }) {
  return (
    <div>
      <Container>
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
