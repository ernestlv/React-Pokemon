import { useContext } from 'react';
import { Context } from './context';
import { UPDATE_HISTORY, UPDATE_DETAIL } from './reducer';
import { PokemonForm } from './PokemonForm';
import { PokemonDetail } from './PokemonDetail';
import { PokemonHistory } from './PokemonHistory';

async function searchPokemon( pokemonName:string, dispatch:any ) {
  let pokemonDetail = null;

  try {
    pokemonName = pokemonName.trim();
    if (pokemonName !== "") {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonName);
      pokemonDetail = await response.json();
    }
  } catch( e ) {
    pokemonDetail = null;
  } finally {
    dispatch({
      type: UPDATE_DETAIL,
      pokemonDetail
    });
  }
}

export function App() {
  const { state, dispatch } = useContext(Context);
  const { pokemonsSuggested, pokemonsSearched, pokemonDetail } = state;

  function onSubmit( pokemonName:string ) {
    searchPokemon( pokemonName, dispatch );
    dispatch({
      type: UPDATE_HISTORY,
      pokemonName
    });
  }

  function onClick( pokemonName:string ) {
    searchPokemon( pokemonName, dispatch );
  }

  console.log("render APP:");
  return (
      <section className="pokemonApp">
        <h1>
          <img src="./assets/25.png" width="50px" height="50px"/><span>Pokedex App</span>
        </h1>
        <PokemonForm pokemonsSuggested={ pokemonsSuggested } onSubmit={ onSubmit } />
        <hr />
        <div className="container">
          <PokemonHistory pokemonsSearched={ pokemonsSearched } onClick={ onClick } />
          <PokemonDetail pokemonDetail={ pokemonDetail || null }/>
        </div>
      </section>
  );
}
