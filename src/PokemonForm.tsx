import React from 'react';
import { v4 } from 'uuid';

export const  PokemonForm: React.FC<PokemonFormProps> = ({ pokemonsSuggested, onSubmit }) => {

  const pokemons = pokemonsSuggested.map(( pokemon ) => ({ key: v4(), value: pokemon.name }));

  let _pokemonName:any;
  let _pokemonSuggested:any;

  const onClick = ( e:any, pokemonName:string ) => {
    e.preventDefault();
    pokemonName = pokemonName.replace(/\s/g, '');
    if (pokemonName !== "") {
      onSubmit( e, pokemonName );
    }
  }

  return (
    <div className="pokemonForm">
      <form>
        <label htmlFor="pokemonName">Type a pokemon name: </label>
        <input type="text" id="pokemonName" name="pokemonName" defaultValue="" ref={ input => _pokemonName = input } />
        &nbsp;
        <button onClick={ ( e ) => onClick( e, _pokemonName.value ) }>Search</button>
        &nbsp;
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
    </div>
  );
}
