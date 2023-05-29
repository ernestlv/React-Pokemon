import React from 'react';
import { PokemonList } from './PokemonList';
import { PokemonForm } from './PokemonForm';

/*
 * Define React stateless functions
 */

export const  App: React.FC = () => {

  const onSubmit = ( e:any, input:any ) => {
    e.preventDefault();
    const pokemonName = input.value;
    alert("submitted!" + pokemonName);
  }

  return (
    <section>
      <h1>
        Pokemon App
      </h1>
      <PokemonList title='List of Pokemons' />
      <PokemonForm onSubmit={ onSubmit }/>
    </section>
  );
}
