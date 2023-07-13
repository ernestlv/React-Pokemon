export const initPokemonSuggestions = async () => {
  console.log('fetching suggestions ...');
  let response;
  try {
    response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    response = await response.json();
  } catch( e ) {
    response = Promise.resolve({ results:[] });
  }
  return response;
};

export const searchPokemon = async ( pokemonName:string ) => {
  let pokemonDetail = null;

  try {
    pokemonName = pokemonName.trim();
    if (pokemonName !== "") {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonName);
      pokemonDetail = await response.json();
    }
  } catch( e ) {
    pokemonDetail = null;
  }

  return pokemonDetail;
}
