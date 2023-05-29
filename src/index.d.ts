interface AppState {
  pokemonsSuggested: Array<{name:string, url:string}>;
  pokemonsSearched: Array<string>;
  pokemonDetail: { [key:string]:any } | null;
}

interface UpdateHistoryAction {
  type: 'UPDATE_HISTORY';
  pokemonName: string;
}

interface UpdateDetailAction {
  type: 'UPDATE_DETAIL';
  pokemonDetail: { [key:string]:any } | null;
}

interface UpdateSuggestionsAction {
  type: 'UPDATE_SUGGESTIONS';
  pokemonsSuggested: Array<{name:string, url:string}>;
}

type AppAction = UpdateHistoryAction | UpdateDetailAction | UpdateSuggestionsAction;

interface PokemonFormProps {
  pokemonsSuggested: Array<{name:string, url:string}>;
  onSubmit: ( pokemonName: string ) => void;
}

interface PokemonHistoryProps {
  pokemonsSearched: Array<string>;
  onClick: ( pokemonName: string ) => void;
}

interface PokemonDetailProps {
  pokemonDetail: { [key:string]:any } | null;
}
