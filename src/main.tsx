import './styles.css';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { App } from './App';
import { appReducer } from './reducer';

// Create the Redux store
const appStore = createStore(appReducer);
const container:Element = document.getElementById('react-container')!;
const root = createRoot(container);
root.render(
  <Provider store={appStore}>
    <App />
  </Provider>
);
