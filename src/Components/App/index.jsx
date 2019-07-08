import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import PrivateRoute from '../PrivateRoute';

import { PublicRoutes, PrivateRoutes } from '../../Utils/Routes';

import './App.scss';

export default function App() {
  return (
    <main className="app">
      <Header />
      <section className="app__content container">
        <Switch>
          {PrivateRoutes.map(route => (
            <PrivateRoute {...route} />
          ))}

          {PublicRoutes.map(route => (
            <Route {...route} />
          ))}
        </Switch>
      </section>
      <Footer />
    </main>
  );
}
