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
            <AiOutlineMail size='1.5rem' color='white' />
          </li>
          <li>
            <AiOutlineInstagram size='1.3rem' color='white' />
          </li>
          <li>
            <AiFillLinkedin size='1.3rem' color='white' />
          </li>
          <li>
            <AiFillGithub size='1.3rem' color='white' />
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
