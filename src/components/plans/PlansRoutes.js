import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from '../utility/ProtectedRoute';

import PlansIndex from './PlansIndex';
import PlansShow from  './PlansShow';
import PlansNew from './PlansNew';
import PlansEdit from './PlansEdit';

const PlansRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={PlansIndex} />
      <ProtectedRoute path="/plan/new" component={PlansNew} />
      <ProtectedRoute path="/plan/:id/edit" component={PlansEdit} />
      <Route path="/plan/:id" component={PlansShow} />
    </Switch>
  );
};

export default PlansRoutes;
