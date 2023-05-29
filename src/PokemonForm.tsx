import React from 'react';

export const  PokemonForm: React.FC<PokemonFormProps> = ({ onSubmit }) => {
  let _pokemonName:any;

  return (
    <div>
      <form onSubmit={ ( e ) => onSubmit( e, _pokemonName ) }>
        <input type="text" id="pokemonName" name="pokemonName" defaultValue="" ref={ input => _pokemonName = input }/>
        <button>Search</button>
      </form>
    </div>
  );
}
