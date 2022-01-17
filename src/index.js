import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';  // routes.js -> components will be routed and served as the webpages

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('root')
);