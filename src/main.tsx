import './styles.css';
import ReactDOM from 'react-dom/client';
import { useState, useContext } from 'react';
import { AppContext, appReducer } from './reducer';
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

const container:Element = document.getElementById('react-container')!;
const root = ReactDOM.createRoot(container);
const store = createStore( appReducer );
const Main = () => {
  const [ mainState, setMainState ] = useState(0); //local state for main component
  let appContext = useContext(AppContext); //it executes on each render of main component it always contains default value of AppContext
  const click =  () => {
    setMainState( mainState + 1 ); //re-render Main component i.e. whole tree
    appContext++;
    console.log("click", "appContext", appContext, "mainState", mainState);
  }
  console.log("main:", "appContext", appContext, "mainState", mainState);
  return (
    <AppContext.Provider value={ mainState }> {/* pass the local state of main component to App comp */}
      <Provider store={store}>
        <App />
        <button onClick={ click  }>change main state</button>
      </Provider>
    </AppContext.Provider>
  );
}

root.render(<Main />);

initPokemonSuggestions().then(({results}) => {
  store.dispatch({
    type: 'UPDATE_SUGGESTIONS',
    pokemonsSuggested: results
  });
});
