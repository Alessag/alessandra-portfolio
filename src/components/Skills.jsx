import React from 'react';
import PropTypes from 'prop-types';
// import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Skills = ({ skills }) => {
  return (
    <div>
      <h1>Hiii</h1>
      {skills.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default Skills;
