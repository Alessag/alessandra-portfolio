import React from 'react';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
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
    <Container id='footer'>
      <Divider orientation='horizontal' />
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
      <h4 className='footer__text'>
        Made with <AiFillHeart color='#54ecc4' /> in San Cristóbal, Venezuela
      </h4>
      <h4 className='footer__text'>
        2020 <AiOutlineCopyrightCircle /> Alessandra Amicarella
      </h4>
    </Container>
  );
};

export default Footer;
