import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PageNotFound } from 'components';
import { ManageHome } from 'routes/ManageHome';
import { ManageProduct } from 'routes/ManageProduct';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={ManageHome} />
      <Route exact path='/product/:id' component={ManageProduct} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
