interface AppState {
  pokemonsSuggested: Array<{name:string, url:string}>;
  pokemonsSearched: Array<string>;
  pokemonDetail: { [key:string]:any } | null;
}

interface UpdateHistoryAction {
  type: string;
  pokemonName: string;
}

interface UpdateDetailAction {
  type: string;
  pokemonDetail: { [key:string]:any } | null;
}

interface UpdateSuggestionsAction {
  type: string;
  pokemonsSuggested: Array<{name:string, url:string}>;
}

type AppAction = UpdateHistoryAction | UpdateDetailAction | UpdateSuggestionsAction;

interface AppContext {
  state: AppState;
  dispatch: Dispatch<AppAction>;
}

interface PokemonFormProps {
  pokemonsSuggested: Array<{name:string, url:string}>;
}

interface PokemonHistoryProps {
  pokemonsSearched: Array<string>;
}

interface PokemonDetailProps {
  pokemonDetail: { [key:string]:any } | null;
}
