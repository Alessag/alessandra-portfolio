import React from 'react';
import { Container } from 'reactstrap';
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';
import '../assets/styles/components/Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <Container className='footer-container'>
        <ul className='footer__menu'>
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
        <ul className='footer__social-links'>
          <li>
            <a
              href='https://www.linkedin.com/in/AlessandraAmicarella/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiFillLinkedin size='1.3rem' className='icons' />
            </a>
          </li>
          <li>
            <a
              href='https://t.me/Alessamica'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTelegramPlane size='1.3rem' className='icons' />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/alessag'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiFillGithub size='1.3rem' className='icons' />
            </a>
          </li>
          <li>
            <a
              href='https://instagram.com/amicarellaa'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiOutlineInstagram size='1.3rem' className='icons' />
            </a>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Footer;
