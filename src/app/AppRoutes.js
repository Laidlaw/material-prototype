import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

// Here we define all our material-ui ReactComponents.
import Master from './components/Master';
import Home from './components/pages/Home';
import SlideCategories from './components/pages/partials/SlideCategories';

import Prerequisites from './components/pages/get-started/Prerequisites';
import Installation from './components/pages/get-started/Installation';
import GridListPage from './components/pages/components/GridList/Page';

/**
 * Routes: https://github.com/rackt/react-router/blob/master/docs/api/components/Route.md
 *
 * Routes are used to declare your view hierarchy.
 *
 * Say you go to http://material-ui.com/#/components/paper
 * The react router will search for a route named 'paper' and will recursively render its
 * handler and its parent handler like so: Paper > Components > Master
 */

const AppRoutes = (
  <Route path="/" component={Master}>
    <IndexRoute component={SlideCategories} />
    <Route path="home" component={Home} />
    <Redirect from="get-started" to="/get-started/prerequisites" />
    <Route path="get-started">
      <Route path="prerequisites" component={Prerequisites} />
      <Route path="installation" component={Installation} />
    </Route>
    <Route path="grid-list" component={GridListPage} />
  </Route>
);

export default AppRoutes;
