import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Login, Register } from './components';

export const ManageAuth = () => {
  return (
    <Fragment>
      <Route exact path='/auth/login' component={Login} />
      <Route exact path='/auth/register' component={Register} />
    </Fragment>
  );
};
