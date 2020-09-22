import React from 'react';
import PropTypes from 'prop-types';
import Certificates from './Certificates';
import Experience from './Experience';

function About({ skills, experience, certificates, urlCv }) {
  return (
    <div>
      <Experience skills={skills} experience={experience} urlCv={urlCv} />
      <Certificates certificates={certificates} />
    </div>
  );
}

About.propTypes = {
  skills: PropTypes.array.isRequired,
  experience: PropTypes.array.isRequired,
  certificates: PropTypes.array.isRequired,
  urlCv: PropTypes.string.isRequired,
};

export default About;
