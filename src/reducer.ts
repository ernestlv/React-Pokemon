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
