import { connect } from 'react-redux';
import { PokemonForm } from './PokemonForm';
import { PokemonDetail } from './PokemonDetail';
import { PokemonHistory } from './PokemonHistory';

async function searchPokemon( pokemonName:string ) {
  let pokemonDetail = null;

  try {
    pokemonName = pokemonName.replace(/\s/g, '');
    if (pokemonName !== "") {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonName);
      pokemonDetail = await response.json();
    }
  } catch( e ) {
    pokemonDetail = null;
  }
  return pokemonDetail;
}

/* call action and passes state */

export const ContainerForm = connect(
  ( state:AppState ) => ({
    pokemonsSuggested: [ ...state.pokemonsSuggested ]
  }),
  ( dispatch:any ) => ({
    onSubmit( pokemonName:string ) {
      searchPokemon( pokemonName ).then(( pokemonDetail ) => {
        dispatch({
          type: 'UPDATE_DETAIL',
          pokemonDetail
        })
      });
      dispatch({
        type: 'UPDATE_HISTORY',
        pokemonName
      });
    }
  })
)(PokemonForm);

export const ContainerDetail = connect(
  ( state:AppState ) => ({
    pokemonDetail: state.pokemonDetail ? { ...state.pokemonDetail } : null
  }),
  ( dispatch:any ) => ({

  })
)(PokemonDetail);

export const ContainerHistory = connect(
  ( state:AppState ) => ({
    pokemonsSearched: [ ...state.pokemonsSearched ]
  }),
  ( dispatch:any ) => ({
    onClick( pokemonName:string ) {
      searchPokemon( pokemonName ).then(( pokemonDetail ) => {
        dispatch({
          type: 'UPDATE_DETAIL',
          pokemonDetail
        })
      });
    }
  })
)(PokemonHistory);
