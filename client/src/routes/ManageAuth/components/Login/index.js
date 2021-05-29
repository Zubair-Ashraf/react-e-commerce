import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { login } from 'actions';

export const Login = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const { push } = useHistory();

  const { userInfo, isLoading } = useSelector((state) => state.user);

  const handleEmailChange = ({ target: { value } }) => setEmail(value);

  const handlePasswordChange = ({ target: { value } }) => setPassword(value);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  if (!isEmpty(userInfo)) push(`/`);

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
              <Button
                variant='secondary'
                type='submit'
                disabled={isLoading}
                className='px-4'
              >
                {isLoading ? 'Loading...' : 'Sign In'}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
