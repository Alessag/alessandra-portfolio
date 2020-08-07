import React from 'react';
import '../assets/styles/components/Header.scss';
import Container from '@material-ui/core/Container';

function Header() {
  return (
    <header className='header'>
      <Container className='menu'>
        <div className='logo'>
          <img className='logo__img' alt='Alessandra Logo' />
          <p>Alessandra Amicarella</p>
        </div>

        <ul className='navbar'>
          <li>Projects</li>
          <li>About Me</li>
          <li>Contact</li>
        </ul>
      </Container>
    </header>
  );
}

export default Header;
