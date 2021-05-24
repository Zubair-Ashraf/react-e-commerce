import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PageNotFound } from 'components';
import { ManageHome } from 'routes';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={ManageHome} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
