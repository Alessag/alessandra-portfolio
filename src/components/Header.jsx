import React from 'react';
import '../assets/styles/components/Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <div className='menu container-fluid'>
        <div className='menu__logo'>
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
      </div>
    </header>
  );
}

export default Header;
