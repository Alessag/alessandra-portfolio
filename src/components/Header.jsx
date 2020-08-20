import React, { useState } from 'react';
import '../assets/styles/components/Header.scss';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <header className='header'>
      <Container fluid>
        <Navbar expand='md'>
          <NavbarBrand href='/'>Alessandra</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className='justify-content-end'>
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
