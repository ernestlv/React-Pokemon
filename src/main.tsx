import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { appReducer } from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { App } from './App';

async function initPokemonSuggestions() {

  let response;

  try {
    response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    response = await response.json();
  } catch( e ) {
    response = Promise.resolve({ results:[] });
  }

  return response;

}

const store = createStore( appReducer );
const container:Element = document.getElementById('react-container')!;
const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

initPokemonSuggestions().then(({results}) => {
  store.dispatch({
    type: 'UPDATE_SUGGESTIONS',
    pokemonsSuggested: results
  });
});
