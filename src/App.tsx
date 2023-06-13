import React from 'react';
import { ContainerForm, ContainerDetail, ContainerHistory } from './containers';

export const App = () => {

  return (
    <section className="pokemonApp">
      <h1>
        <img src="./assets/25.png" width="50px" height="50px"/><span>Pokedex App</span>
      </h1>
      <ContainerForm />
      <hr />
      <div className="container">
        <ContainerHistory />
        <ContainerDetail />
      </div>
    </section>
  );

}
