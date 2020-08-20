import React from 'react';
import PropTypes from 'prop-types';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Skills = ({ skills }) => {
  return (
    <div>
      starTransform(1)
      {skills.map((skill) => (
        <div key={skill.id}>
          <h1>{skill.name}</h1>
          {/* <h2>starTransform({skill.stars})</h2> */}
          <BsStarFill color='red' />
          <BsStarHalf color='red' />
          <BsStar color='red' />
        </div>
      ))}
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.shape.isRequired,
};

export default Skills;
