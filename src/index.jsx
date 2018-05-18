import React from 'react';
import ReactDOM from 'react-dom';
import flats from './../data/flats.js';
import App from './components/app.jsx';


import '../assets/stylesheets/application.scss';

const Hello = props => <div>Hello, {props.name}</div>;

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App flats={flats} />, root);
}
