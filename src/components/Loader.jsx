import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import '../assets/styles/main.scss';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8em 0px;
  height: 100vh;
`;

const Load = styled.div`
  border: 6px solid white;
  border-top: 6px solid #8083ff;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: ${spin} 2s linear infinite;
`;

const Loader = () => (
  <Wrapper>
    <Load />
  </Wrapper>
);

export default Loader;
