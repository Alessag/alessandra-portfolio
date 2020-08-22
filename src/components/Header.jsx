import React from 'react';
import '../assets/styles/components/Header.scss';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <Container fluid className='header-nav'>
        <h4>Ale</h4>
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
      </Container>
    </header>
  );
};

export default Header;
