/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Skills.scss';

const Skills = ({ skills }) => {
  return (
    <div className='skills'>
      {skills.map((item) => {
        return (
          <div key={item.id} className={`${item.name}-container`}>
            <p>{item.name}</p>
            <div className={`${item.name}-stars-wrapper`}>
              {item.stars.map((subitem, index) => {
                return (
                  <img
                    key={index}
                    src={require(`../assets/images/icons/${subitem}`)}
                    className={subitem}
                    alt={item.name}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default Skills;
