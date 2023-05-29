interface ListProps {
  // Declare props here
  items: Array<{key:string; value:any}>;
}

interface ListLinkProps {
  items: Array<{key:string; value:any}>;
  onClick: ( e:any, item:any ) => void;
}

interface AppProps {}

interface AppState {
  pokemonsSuggested: Array<{name:string, url:string}>;
  pokemonsSearched: Array<string>;
  pokemonDetail: { [key:string]:any } | null;
}

interface PokemonListProps {
  pokemonList: Array<{name:string, url:string}>;
  onClick: ( e:any, item: any ) => void
}

interface PokemonFormProps {
  pokemonsSuggested: Array<{name:string, url:string}>;
  onSubmit: ( e: any, pokemonName:string ) => void;
}

interface PokemonHistoryProps {
  pokemonsSearched: Array<string>;
  onClick: ( e:any, pokemonName: string ) => void
}

interface PokemonDetailProps {
  pokemonDetail: { [key:string]:any } | null;
}
