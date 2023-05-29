import { Reducer } from 'redux';
import { unique } from './util';

function updatePokemonHistory( state:AppState, pokemonName:string ) {

  let pokemonsSearched = state.pokemonsSearched;

  pokemonName = pokemonName.replace(/\s/g, '');
  if (pokemonName !== "") {
    pokemonsSearched = unique([pokemonName, ...pokemonsSearched]);
  }
  return pokemonsSearched;
}

const initialState: AppState = {
  pokemonsSuggested: [],
  pokemonsSearched: [],
  pokemonDetail: null
};

export const appReducer: Reducer<AppState, AppAction> = (state = initialState, action) => {

  switch (action.type) {
    case 'UPDATE_HISTORY':
      return {
        ...state,
        pokemonsSearched: updatePokemonHistory(state, action.pokemonName)
      };
    case 'UPDATE_DETAIL':
      const www = {
        ...state,
        pokemonDetail: action.pokemonDetail
      };
      return www;
    case 'UPDATE_SUGGESTIONS':
      return {
        ...state,
        pokemonsSuggested: action.pokemonsSuggested
      };
    default:
      return state;
  }

};
