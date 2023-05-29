import React from 'react';
import { v4 } from 'uuid';
import { ListLink } from './ListLink';

export const  PokemonList: React.FC<PokemonListProps> = ( { title, pokemonList, onClick } ) => {
  const pokemons = pokemonList.map((pokemon) => ({ key: v4(), value: pokemon.name }));

  return (
    <div>
      <h2>{title}</h2>
      <ListLink items={ pokemons } onClick={ onClick } />
    </div>
  );

}
