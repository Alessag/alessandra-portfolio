import React from 'react';
import { Container } from 'reactstrap';
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import '../assets/styles/components/Footer.scss';
import { MdCopyright } from 'react-icons/md';

const Footer = () => {
  return (
    <div className='footer'>
      <Container className='footer-container'>
        <p>
          <MdCopyright /> Copyright 2020, All rights reserved
        </p>
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
