import React from 'react';
import { Router, Route } from 'react-router';

import Layout from './components/Layout';
import App from './components/App';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route component={Layout}>
      <Route  path="/" component={App}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

export default Routes;