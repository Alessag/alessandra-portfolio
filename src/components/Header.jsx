import React, { useState } from 'react';
import '../assets/styles/components/Header.scss';
import { HashLink as Link } from 'react-router-hash-link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from 'reactstrap';
import LogoAle from '../assets/images/logo-box.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className='header' id='top'>
      <Container fluid>
        <Navbar expand='md' dark>
          <NavbarBrand href='/'>
            <img src={LogoAle} alt='Logo' className='img-fluid logo' />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className='list-wrapper'>
            <Nav navbar>
              <NavItem>
                <Link to='/'>Home</Link>
              </NavItem>
              <NavItem>
                <Link to='/about'>About</Link>
              </NavItem>
              <NavItem>
                <Link to='/contact'>Contact</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
