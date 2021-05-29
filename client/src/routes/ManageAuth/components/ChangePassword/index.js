import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { isEqual } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { toast as showToast } from 'react-toastify';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { changePassword } from 'actions';

export const ChangePassword = () => {
  const [values, setValues] = useState({});

  const { push } = useHistory();

  const dispatch = useDispatch();

  const { isLoading, isSuccess } = useSelector(
    (state) => state.userChangePassword
  );

  const handleValuesChange = ({ target: { name, value } }) =>
    setValues({ ...values, [name]: value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { currentPassword, newPassword, confirmPassword } = values;

    if (!isEqual(newPassword, confirmPassword)) {
      showToast.error('Confirm password must match with password');
      return;
    }

    dispatch(changePassword(currentPassword, newPassword));
  };

  if (isSuccess) push('/auth/login');

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col md={5} className='bg-light border rounded-3 p-5'>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='currentPassword'>
              <Form.Label>
                <b>Current Password</b>
              </Form.Label>
              <Form.Control
                name='currentPassword'
                type='password'
                placeholder='Enter current password'
                value={values.currentPassword}
                onChange={handleValuesChange}
              ></Form.Control>
            </Form.Group>
            <br />
            <Form.Group controlId='newPassword'>
              <Form.Label>
                <b>New Password</b>
              </Form.Label>
              <Form.Control
                name='newPassword'
                type='password'
                placeholder='Enter new password'
                value={values.newPassword}
                onChange={handleValuesChange}
              ></Form.Control>
            </Form.Group>
            <br />
            <Form.Group controlId='confirmPassword'>
              <Form.Label>
                <b>Confirm Password</b>
              </Form.Label>
              <Form.Control
                name='confirmPassword'
                type='password'
                placeholder='Enter confirm password'
                value={values.confirmPassword}
                onChange={handleValuesChange}
              ></Form.Control>
            </Form.Group>
            <br />
            <Button variant='secondary' type='submit' disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Change Password'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
