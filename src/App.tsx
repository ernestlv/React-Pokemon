import React from 'react';
import { uuidArray } from './util';
import { PokemonList } from './PokemonList';

/*
 * Define React stateless functions
 */

export const  App: React.FC = () => {
  const arr:Array<{key:string, value:number}> = uuidArray([0,1,2]);

  return (
    <section>
      <h1>
        Pokemon App
      </h1>
      <PokemonList title='List of Pokemons' />
    </section>
  );
}
