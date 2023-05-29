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
  pokemonList: Array<{name:string, url:string}>;
}

interface PokemonListProps {
  title: string;
  pokemonList: Array<{name:string, url:string}>;
  onClick: ( e:any, item: any ) => void
}

interface PokemonFormProps {
  onSubmit: ( e: any, input:any ) => void;
}
