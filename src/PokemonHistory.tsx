import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { UPDATE_DETAIL } from './reducer';
import { searchPokemon } from './api';

export const  PokemonHistory: React.FC<PokemonHistoryProps> = ( { pokemonsSearched } ) => { //props is passed by react as an object
  const dispatch = useDispatch();

  const pokemons = pokemonsSearched.map((pokemon) => ({ key: v4(), value: pokemon }));

  const onClick = ( e:any, pokemonName:string ) => {
    e.preventDefault();
    searchPokemon( pokemonName ).then(pokemonDetail => {
      dispatch({
        type: UPDATE_DETAIL,
        pokemonDetail
      });
    });
  }

  console.log("render: PokemonHistory:");
  return (
    <section className="pokemonHistory">
      <h2>History of Searched Pokemons</h2>
      <p>Click a pokemon name to see details:</p>
      <ul className="listLink">
        {pokemons.map(( pokemon ) => {
          const { key, value } = pokemon;
          return <li key={ key }><a href={ "#"+key } onClick={ ( e ) => onClick( e, value ) }>{ value }</a></li>;
        })}
      </ul>
    </section>
  );

}
