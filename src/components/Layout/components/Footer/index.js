import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center'>
            Copyright &copy; <Link to='/'>React e-commerce</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
