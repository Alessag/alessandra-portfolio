import React from 'react';
import '../assets/styles/main.scss';
import styled from '@emotion/styled';

export const Button = styled.a`
  text-transform: uppercase;
  background: none;
  border: 2px solid;
  line-height: 1;
  padding: 0.8em 2em;
  color: #8083ff;
  transition: all 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
  &:hover,
  &:focus {
    border-color: hsla(249, 100%, 75%, 1);
    color: white;
    text-decoration: none;
    box-shadow: inset 0 0 0 2em hsla(249, 100%, 75%, 1);
  }
`;

export const column = styled.div`
  background: red;
`;
