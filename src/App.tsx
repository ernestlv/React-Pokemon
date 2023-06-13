import { useState, useContext } from 'react';
import { AppContext } from './reducer';
import { ContainerForm, ContainerDetail, ContainerHistory } from './containers';

export const App = () => {

  const [appState, setAppState] = useState(-1); //local state for App component it executes on each App render
  let appContext = useContext(AppContext); //takes value from main component Provider. it executes on each App render
  const click = () => {
    appContext++;
    setAppState( appState + 1 ); //call render for App component
    console.log("click:", "appContext", appContext, "appState", appState);
  }

  console.log("APP:", "appContext", appContext, "appState", appState);

  return (
    <section className="pokemonApp">
      <h1>
        <img src="./assets/25.png" width="50px" height="50px"/><span>Pokedex App</span>
      </h1>
      <ContainerForm />
      <hr /> { appContext } { appState } <button onClick={ click }> change app state </button> {/* re-render App subtree */}
      <div className="container">
        <ContainerHistory />
        <ContainerDetail />
      </div>
    </section>
  );

}
