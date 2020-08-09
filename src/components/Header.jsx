import React from 'react';
import '../assets/styles/components/Header.scss';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <Container className='menu'>
        <div className='manu__logo'>
          <img className='menu__logo-img' alt='Logo' />
        </div>

        <nav className='navbar'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
