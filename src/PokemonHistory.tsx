import React from 'react';
import { v4 } from 'uuid';

export const  PokemonHistory: React.FC<PokemonHistoryProps> = ( { pokemonsSearched, onClick } ) => {

  const pokemons = pokemonsSearched.map((pokemon) => ({ key: v4(), value: pokemon }));

  const onClickWrapper = ( e:any, pokemonName:string ) => {
    e.preventDefault();
    onClick( pokemonName );
  }

  return (
    <section className="pokemonHistory">
      <h2>History of Searched Pokemons</h2>
      <p>Click a pokemon name to see details:</p>
      <ul className="listLink">
        {pokemons.map(( pokemon ) => {
          const { key, value } = pokemon;
          return <li key={ key }><a href={ "#"+key } onClick={ ( e ) => onClickWrapper( e, value ) }>{ value }</a></li>;
        })}
      </ul>
    </section>
  );

}
