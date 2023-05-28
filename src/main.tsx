import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

const container:Element = document.getElementById('react-container')!;
const root = ReactDOM.createRoot(container);
root.render(<App />);
