import React from 'react';
import { Container } from 'reactstrap';
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillHeart,
  AiOutlineCopyrightCircle,
} from 'react-icons/ai';
import '../assets/styles/components/Footer.scss';

const Footer = () => {
  return (
    <Container className='footer'>
      <div className='divider' />
      <div>
        <ul className='footer__social-links'>
          <li>
            <a href='mailto:alessamica@gmail.com'>
              <AiOutlineMail size='1.3rem' color='white' className='icons' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/AlessandraAmicarella/'>
              <AiFillLinkedin size='1.3rem' color='white' className='icons' />
            </a>
          </li>
          <li>
            <a href='https://github.com/alessag'>
              <AiFillGithub size='1.3rem' color='white' className='icons' />
            </a>
          </li>
          <li>
            <a href='https://instagram.com/amicarellaa'>
              <AiOutlineInstagram
                size='1.3rem'
                color='white'
                className='icons'
              />
            </a>
          </li>
        </ul>
      </div>
      <div className='text-center footer__text'>
        <p>
          Made with <AiFillHeart color='#54ecc4' /> in Venezuela <br />
          2020 <AiOutlineCopyrightCircle /> Alessandra Amicarella
        </p>
      </div>
    </Container>
  );
};

export default Footer;
