import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PageNotFound } from 'components';
import { ManageHome } from 'routes/ManageHome';
import { ManageProductDetail } from 'routes/ManageProductDetail';
import { ManageCart } from 'routes/ManageCart';
import { ManageAuth } from 'routes/ManageAuth';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={ManageHome} />
      <Route path='/auth' component={ManageAuth} />
      <Route exact path='/product/:id' component={ManageProductDetail} />
      <Route exact path='/cart/:id?' component={ManageCart} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
