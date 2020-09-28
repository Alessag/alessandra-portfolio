import React from 'react';
import '../assets/styles/components/Header.scss';
import { HashLink as Link } from 'react-router-hash-link';
import LogoAle from '../assets/images/logo-box.png';

const Header = () => {
  return (
    <header className='header'>
      <img src={LogoAle} alt='Logo' className='img-fluid logo' />
      <div className='menu'>
        <nav>
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
      </div>
    </header>
  );
};

export default Header;
