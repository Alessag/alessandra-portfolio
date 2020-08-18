import React from 'react';
import PropTypes from 'prop-types';
import Projects from './Projects';

function LandingPage({ projects }) {
  return (
    <div>
      <h1>I am the Home Page</h1>
      <Projects projects={projects} />
    </div>
  );
}

LandingPage.propTypes = {
  projects: PropTypes.node.isRequired,
};

export default LandingPage;
