import React from 'react';
import PropTypes from 'prop-types';
import Certificates from './Certificates';
import Experience from './Experience';

function About({ skills, certificates }) {
  return (
    <div>
      <Experience skills={skills} />
      <Certificates certificates={certificates} />
    </div>
  );
}

About.propTypes = {
  skills: PropTypes.array.isRequired,
  certificates: PropTypes.array.isRequired,
};

export default About;
