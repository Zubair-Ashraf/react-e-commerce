import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { logout } from 'actions';

export const Header = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.user);

  const isLoggedIn = userInfo;

  const handleLogout = () => dispatch(logout());

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
            {isLoggedIn ? (
              <NavDropdown title={userInfo.name} id='username' drop='left'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to='/auth/login'>
                <Nav.Link>
                  <i className='fas fa-user fa-sm me-2' />
                  Sign In
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
