import React from 'react';
import PropTypes from 'prop-types';
import Info from './Info';
import Projects from './Projects';

function LandingPage({ projects }) {
  return (
    <div>
      <Info />
      <Projects projects={projects} />
    </div>
  );
}

LandingPage.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default LandingPage;
