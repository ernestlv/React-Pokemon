import { Reducer, Dispatch } from 'redux';
import { unique } from './util';

function updatePokemonHistory( state:AppState, pokemonName:string ) {

  let pokemonsSearched = state.pokemonsSearched;

  pokemonName = pokemonName.replace(/\s/g, '');
  if (pokemonName !== "") {
    pokemonsSearched = unique([pokemonName, ...pokemonsSearched]);
  }
  return pokemonsSearched;
}

export const initialState: AppState = {
  pokemonsSuggested: [],
  pokemonsSearched: [],
  pokemonDetail: null
};

/* action types */
export const UPDATE_HISTORY = 'UPDATE_HISTORY';
export const UPDATE_DETAIL = 'UPDATE_DETAIL';
export const UPDATE_SUGGESTIONS = 'UPDATE_SUGGESTIONS';

/* updates state */
export const appReducer: Reducer<AppState, AppAction> = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_HISTORY:
      return {
        ...state,
        pokemonsSearched: updatePokemonHistory(state, ( <UpdateHistoryAction>action ).pokemonName)
      };
    case UPDATE_DETAIL:
      const www = {
        ...state,
        pokemonDetail: ( <UpdateDetailAction>action ).pokemonDetail
      };
      return www;
    case UPDATE_SUGGESTIONS:
      return {
        ...state,
        pokemonsSuggested: ( <UpdateSuggestionsAction>action ).pokemonsSuggested
      };
    default:
      return state;
  }

};

export const initPokemonSuggestions = async ( dispatch:Dispatch<AppAction> ) => {
  console.log('fetching suggestions ...');
  let response;
  try {
    response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    response = await response.json();
  } catch( e ) {
    response = Promise.resolve({ results:[] });
  } finally {
    console.log('fetching dispatch', response);
    dispatch({
      type: UPDATE_SUGGESTIONS,
      pokemonsSuggested: response.results
    });
  }
  console.log('fetching suggestions done.');
};

export const searchPokemon = async ( pokemonName:string, dispatch:Dispatch<AppAction> ) => {
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
