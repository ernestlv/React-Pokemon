interface ListProps {
  // Declare props here
  items: Array<{key:string; value:any}>;
}

interface ListLinkProps {
  items: Array<{key:string; value:any}>;
  onClick: ( item:any ) => void;
}

interface PokemonProps {
  title: string;
}

interface PokemonState {
  pokemonList:Array<{name:string, url:string}>;
}
