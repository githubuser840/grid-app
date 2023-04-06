import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './Grid'
import './index.css';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <Grid/>,
  document.getElementById('root')
);