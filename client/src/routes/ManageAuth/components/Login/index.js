import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { login } from 'actions';

export const Login = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleEmailChange = ({ target: { value } }) => setEmail(value);

  const handlePasswordChange = ({ target: { value } }) => setPassword(value);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  return (
    <Container>
      <Row className='justify-content-center py-5'>
        <Col md={6} className='bg-light border rounded-3 p-5'>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='email'>
              <Form.Label>
                <b>Email Address</b>
              </Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={handleEmailChange}
              ></Form.Control>
            </Form.Group>
            <br />
            <Form.Group controlId='password'>
              <Form.Label>
                <b>Password</b>
              </Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={handlePasswordChange}
              ></Form.Control>
            </Form.Group>
            <br />
            <div className='d-flex justify-content-between'>
              <span>
                <span>Don't have an account? &nbsp;</span>
                <Link to='/auth/register'>Register</Link>
              </span>
              <Button variant='secondary' type='submit' className='px-4'>
                Sign In
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
