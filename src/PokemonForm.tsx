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
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="pokemonSuggested">Select a pokemon to search: </label>
              </td>
              <td>
                <select id="pokemonSuggested" name="pokemonSuggested" defaultValue="" ref={ select => _pokemonSuggested = select } >
                  {
                    pokemons.map(( pokemon ) => {
                      const { key, value } = pokemon;
                      return <option key={ key } value={ value }>{ value }</option>;
                    })
                  }
                </select>
              </td>
              <td>
                <button onClick={ ( e ) => onClick( e, _pokemonSuggested.value ) }>Search</button>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="pokemonName">Type a pokemon name: </label>
              </td>
              <td>
                <input type="text" id="pokemonName" name="pokemonName" defaultValue="" ref={ input => _pokemonName = input } />
              </td>
              <td>
                <button onClick={ ( e ) => onClick( e, _pokemonName.value ) }>Search</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </section>
  );
}
