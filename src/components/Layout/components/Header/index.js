import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';

export const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' fixed='top'>
      <Container fluid>
        <Navbar.Brand href='/'>React E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='#home'>
              <i className='fas fa-shopping-cart fa-sm me-2' />
              Cart
            </Nav.Link>
            <Nav.Link href='#link'>
              <i className='fas fa-user fa-sm me-2' />
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
