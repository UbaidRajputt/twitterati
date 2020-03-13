import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components/RouteWithLayout/RouteWithLayout';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import { Dashboard } from './views/Dashboard/Dashboard';
import { UserList } from './views/UserList/UserList';
import { ProductList } from './views/ProductList/ProductList';
import { NotFound } from './views/NotFound/NotFound'
 
export const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/trends"
      />
      <RouteWithLayout
        component={Dashboard}
        exact
        layout={MainLayout}
        path="/trends"
      />
      <RouteWithLayout
        component={UserList}
        exact
        layout={MainLayout}
        path="/searchTrends"
      />
      <RouteWithLayout
        component={ProductList}
        exact
        layout={MainLayout}
        path="/products"
      />
      <RouteWithLayout
        component={NotFound}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};
