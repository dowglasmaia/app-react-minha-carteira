import React from 'react';
import { Switch, Route } from "react-router-dom";

/* Paginas */
import Layout from '../components/Layout';
import Dashboard from '../Pages/Dashboard';
import Lista from '../Pages/List';

const AppRoutes: React.FC = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Dashboard} />

      <Route path="/dashboard" exact component={Dashboard} />

      <Route path="/list/:type" exact component={Lista} />

    </Switch>
  </Layout>

);

export default AppRoutes;