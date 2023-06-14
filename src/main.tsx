import './styles.css';
import ReactDOM from 'react-dom/client';
import { useState, useContext, useEffect } from 'react';
import { AppContext, appReducer } from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { App } from './App';


async function initPokemonSuggestions() {
  console.log('fetching suggestions ...');
  let response;

  try {
    response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    response = await response.json();
  } catch( e ) {
    response = Promise.resolve({ results:[] });
  } finally {
    console.log('fetching response', response);
    store.dispatch({
      type: 'UPDATE_SUGGESTIONS',
      pokemonsSuggested: response.results
    });
  }
  console.log('fetching suggestions done.');
};

const container:Element = document.getElementById('react-container')!;
const root = ReactDOM.createRoot(container);
const store = createStore( appReducer );
const Main = () => {
  const [ mainState, setMainState ] = useState(0); //local state for main component
  useEffect(() => { // runs after Main component is rendered
    initPokemonSuggestions();
  }, []); // empty array make sure it only runs once

  const click =  () => {
    setMainState( mainState + 1 ); //re-render Main component i.e. whole tree
    console.log("click Main:", "mainState", mainState);
  }

  console.log("render Main:", "mainState", mainState);
  return (
    <AppContext.Provider value={ mainState }> {/* pass the local state of main component to App comp */}
      <Provider store={store}>
        <button onClick={ click  }>change main state</button> mainState: { mainState }
        <App />
      </Provider>
    </AppContext.Provider>
  );
}
root.render(<Main />);
