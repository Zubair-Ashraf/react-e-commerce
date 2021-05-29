import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Login, Register, ChangePassword } from './components';

export const ManageAuth = () => {
  return (
    <Fragment>
      <Route exact path='/auth/login' component={Login} />
      <Route exact path='/auth/register' component={Register} />
      <Route exact path='/auth/change-password' component={ChangePassword} />
    </Fragment>
  );
};
