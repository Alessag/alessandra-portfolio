/* eslint-disable no-unused-vars */
import React from 'react';
import styled from '@emotion/styled';
import { jsx } from '@emotion/core';
import { css } from 'emotion';
import { Link, animateScroll as scroll } from 'react-scroll';
import { RiArrowUpSLine } from 'react-icons/ri';

const gray = '#bcbcbc';
const purple = '#8083ff';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BackToTop = () => {
  return (
    <Wrapper>
      <Link
        className={css`
          color: ${gray};
          border: 1.5px solid ${purple};
          border-radius: 50%;
          &:hover {
            background-color: ${purple};
            color: ${gray};
          }
        `}
        activeClass='active'
        to='top'
        spy
        smooth
        offset={-70}
        duration={500}
      >
        <RiArrowUpSLine size='2em' />
      </Link>
    </Wrapper>
  );
};

export default BackToTop;
