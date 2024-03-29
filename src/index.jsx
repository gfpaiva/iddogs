/* global document: true */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './Components/App';

import './_redirects';
import './index.scss';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),
);
