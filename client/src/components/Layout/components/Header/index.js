import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, Container } from 'react-bootstrap';

export const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' fixed='top'>
      <Container fluid>
        <LinkContainer to='/'>
          <Navbar.Brand>React E-Commerce</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <LinkContainer to='/cart'>
              <Nav.Link>
                <i className='fas fa-shopping-cart fa-sm me-2' />
                Cart
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/auth/login'>
              <Nav.Link>
                <i className='fas fa-user fa-sm me-2' />
                Sign In
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
