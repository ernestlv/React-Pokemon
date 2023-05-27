import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { print } from './util';
import List from './List';

print('React Program Start!');

const arr = [0, 1, 2, 3, 4];
const container = document.getElementById('react-container');
const root = ReactDOM.createRoot(container);
const el = React.createElement(List, { items: arr }, null);
root.render(el);
