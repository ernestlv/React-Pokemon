import './styles.css';
import { createRoot } from 'react-dom/client';
import { useEffect, useReducer, Dispatch } from 'react';
import { Context } from './context';
import { appReducer, initialState, UPDATE_SUGGESTIONS } from './reducer';
import { App } from './App';

async function initPokemonSuggestions( dispatch:Dispatch<AppAction> ) {
  console.log('fetching suggestions ...');
  let response;
  try {
    response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    response = await response.json();
  } catch( e ) {
    response = Promise.resolve({ results:[] });
  } finally {
    console.log('fetching dispatch', response);
    dispatch({
      type: UPDATE_SUGGESTIONS,
      pokemonsSuggested: response.results
    });
  }
  console.log('fetching suggestions done.');
};

function Main() {
  const [ state, dispatch ] = useReducer(appReducer, initialState);

  useEffect(() => { // runs after Main component is rendered
    initPokemonSuggestions(dispatch);
  }, []); // empty array make sure it only runs once

  console.log("render Main:");
  return (
    <Context.Provider value={{ state, dispatch }}>
      <App />
    </Context.Provider>
  );
}

const container:Element = document.getElementById('react-container')!;
const root = createRoot(container);
root.render(<Main />);
