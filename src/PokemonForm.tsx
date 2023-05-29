import React from 'react';
import { v4 } from 'uuid';

export const  PokemonForm: React.FC<PokemonFormProps> = ({ pokemonsSuggested, onSubmit }) => {

  const pokemons = pokemonsSuggested.map(( pokemon ) => ({ key: v4(), value: pokemon.name }));

  const onClick = ( e:any, pokemonName:string ) => {
    e.preventDefault();
    onSubmit( pokemonName );
  }

  let _pokemonName:any;
  let _pokemonSuggested:any;

  return (
    <section className="pokemonForm">
      <h2>Pokemon Search</h2>
      <form onSubmit={ ( e ) => e.preventDefault() }>
        <label htmlFor="pokemonName">Type a pokemon name: </label>
        <input type="text" id="pokemonName" name="pokemonName" defaultValue="" ref={ input => _pokemonName = input } />
        &nbsp;
        <button onClick={ ( e ) => onClick( e, _pokemonName.value ) }>Search</button>
        &nbsp;&nbsp;or&nbsp;&nbsp;
        <label htmlFor="pokemonSuggested">Select a suggested pokemon to search: </label>
        <select id="pokemonSuggested" name="pokemonSuggested" defaultValue="" ref={ select => _pokemonSuggested = select } >
          {
            pokemons.map(( pokemon ) => {
              const { key, value } = pokemon;
              return <option key={ key } value={ value }>{ value }</option>;
            })
          }
        </select>
        &nbsp;
        <button onClick={ ( e ) => onClick( e, _pokemonSuggested.value ) }>Search</button>
      </form>
    </section>
  );
}
