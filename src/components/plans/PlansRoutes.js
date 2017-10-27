import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import ProtectedRoute from '../utility/ProtectedRoute';

import PlansIndex from './PlansIndex';
import PlansShow from  './PlansShow';
import PlansNew from './PlansNew';
import PlansEdit from './PlansEdit';

const PlansRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={PlansIndex} />
      <Route path="/plan/new" component={PlansNew} />
      <Route path="/plan/:id/edit" component={PlansEdit} />
      {/* <ProtectedRoute path="/plan/new" component={PlansNew} />
      <ProtectedRoute path="/plan/:id/edit" component={PlansEdit} /> */}
      <Route path="/plan/:id" component={PlansShow} />
    </Switch>
  );
};

export default PlansRoutes;


// import React from 'react';
// import { Switch, Route } from 'react-router-dom';
// import ProtectedRoute from '../utility/ProtectedRoute';
//
// import FoodsIndex from './FoodsIndex';
// import FoodsShow from  './FoodsShow';
// import FoodsNew from './FoodsNew';
// import FoodsEdit from './FoodsEdit';
//
// const FoodsRoutes = () => {
//   return (
//     <Switch>
//       <Route exact path="/" component={FoodsIndex} />
//       <ProtectedRoute path="/foods/new" component={FoodsNew} />
//       <ProtectedRoute path="/foods/:id/edit" component={FoodsEdit} />
//       <Route path="/foods/:id" component={FoodsShow} />
//     </Switch>
//   );
// };
//
// export default FoodsRoutes;
