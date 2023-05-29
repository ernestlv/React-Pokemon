import React from 'react';
import { v4 } from 'uuid';
import { ListLink } from './ListLink';

export const  PokemonList: React.FC<PokemonListProps> = ( { pokemonList, onClick } ) => {
  const pokemons = pokemonList.map((pokemon) => ({ key: v4(), value: pokemon.name }));

  return (
    <div className="pokemonList">
      <h2>List of Pokemons</h2>
      <p>Click a pokemon name to see details:</p>
      <ListLink items={ pokemons } onClick={ onClick } />
    </div>
  );

}
