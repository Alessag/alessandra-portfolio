import React from 'react';
import '../assets/styles/components/Main.scss';
// import Header from './Header';
import Container from '@material-ui/core/Container';

function Main() {
  return (
    <Container className='main'>
      <div>
        <ul className='social-links'>
          <li>Instagram</li>
          <li>Github</li>
          <li>Linkeid</li>
          <li>Email</li>
        </ul>
      </div>
      <div className='cube'>Front End Developer</div>
    </Container>
  );
}

export default Main;
