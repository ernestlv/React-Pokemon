import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initPokemonSuggestions } from './api';
import {  UPDATE_SUGGESTIONS } from './reducer';
import { PokemonForm } from './PokemonForm';
import { PokemonDetail } from './PokemonDetail';
import { PokemonHistory } from './PokemonHistory';

export function App() {
  const pokemonsSuggested = useSelector((state:AppState) => state.pokemonsSuggested);
  const pokemonsSearched = useSelector((state:AppState) => state.pokemonsSearched);
  const pokemonDetail = useSelector((state:AppState) => state.pokemonDetail);
  const dispatch = useDispatch();

  useEffect(() => { // runs after Main component is rendered
    initPokemonSuggestions().then(response => {
      console.log('fetching dispatch', response);
      dispatch({
        type: UPDATE_SUGGESTIONS,
        pokemonsSuggested: response.results
      });
    });
  }, []); // empty array make sure it only runs once

  console.log("render APP:");
  return (
      <section className="pokemonApp">
        <h1>
          <img src="./assets/25.png" width="50px" height="50px"/><span>Pokedex App</span>
        </h1>
        <PokemonForm pokemonsSuggested={ pokemonsSuggested } />
        <hr />
        <div className="container">
          <PokemonHistory pokemonsSearched={ pokemonsSearched } />
          <PokemonDetail pokemonDetail={ pokemonDetail || null }/>
        </div>
      </section>
  );
}
