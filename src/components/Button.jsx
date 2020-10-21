/* eslint-disable no-unused-vars */
import '../assets/styles/main.scss';
import styled from '@emotion/styled';
import { jsx, css, keyframes } from '@emotion/core';

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

export const PrimaryButton = styled(Button)`
  text-transform: capitalize;
  padding: 0;
  border: none;
  &:hover,
  &:focus {
    border-color: transparent;
    box-shadow: none;
  }
`;

/**
 * Simple overlay
 */

export const PageFade = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  opacity: 0;
`;

const FadeIn = keyframes`
 0%{
   opacity: 0;
 }

 100%{
   opacity: 1;
 }
`;

export const Wrapping = styled.div`
  width: 100%;
  height: 100%;
  animation: ${FadeIn} ease-in-out forwards 1s;
`;
