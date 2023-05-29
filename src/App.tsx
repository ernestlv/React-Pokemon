import React from 'react';
import { ContainerForm, ContainerDetail, ContainerHistory } from './containers';

export const App = () => {

  return (
    <section className="pokemonApp">
      <h1>
        Pokedex App
      </h1>
      <ContainerForm />
      <hr />
      <ContainerHistory />
      <ContainerDetail />
    </section>
  );

}
