import React from 'react';
import { v4 } from 'uuid';
import { ListLink } from './ListLink';

export const  PokemonHistory: React.FC<PokemonHistoryProps> = ( { pokemonsSearched, onClick } ) => {
  const pokemons = pokemonsSearched.map((pokemon) => ({ key: v4(), value: pokemon }));

  return (
    <div className="pokemonSearchedList">
      <h2>History of Searched Pokemons</h2>
      <p>Click a pokemon name to see details:</p>
      <ListLink items={ pokemons } onClick={ onClick } />
    </div>
  );

}
