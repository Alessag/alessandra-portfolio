import React from 'react';
import { Container } from 'reactstrap';
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineCopyrightCircle,
} from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import '../assets/styles/components/Footer.scss';

const Footer = () => {
  return (
    <Container className='footer'>
      <div>
        <ul className='footer__social-links'>
          <li>
            <a
              href='https://www.linkedin.com/in/AlessandraAmicarella/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiFillLinkedin size='1.3rem' color='white' className='icons' />
            </a>
          </li>
          <li>
            <a
              href='https://t.me/Alessamica'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTelegramPlane size='1.3rem' color='white' className='icons' />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/alessag'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiFillGithub size='1.3rem' color='white' className='icons' />
            </a>
          </li>
          <li>
            <a
              href='https://instagram.com/amicarellaa'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiOutlineInstagram
                size='1.3rem'
                color='white'
                className='icons'
              />
            </a>
          </li>
        </ul>
      </div>
      <div className='footer__text text-center'>
        <p>
          <AiOutlineCopyrightCircle /> 2020 Alessandra Amicarella
        </p>
      </div>
    </Container>
  );
};

export default Footer;
