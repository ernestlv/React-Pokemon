import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { v4 } from 'uuid';
import { AppContext } from './reducer';

export const  PokemonHistory: React.FC<PokemonHistoryProps> = ( { pokemonsSearched, onClick } ) => {

  const [ historyState, setHistoryState ] = useState(2); //local state for App component it executes on each PokemonHistory render
  let appContext = useContext(AppContext); //takes value from App component Provider. it executes on each PokemonHistory render

  useEffect(() => console.log("Effect History")); //after JSX block is render and DOM is updated no matter setTimeout in JSX block
  useEffect(() => { setTimeout(() => console.log("Async Effect History"), 0) }); //last part to execute

  const click = () => {
    appContext++;
    setHistoryState( historyState + 1 ); //call render for PokemonHistory component
    console.log("click History:", "appContext", appContext, "historyState", historyState);
  }

  const pokemons = pokemonsSearched.map((pokemon) => ({ key: v4(), value: pokemon }));

  const onClickWrapper = ( e:any, pokemonName:string ) => {
    e.preventDefault();
    onClick( pokemonName );
  }
  setTimeout(() => console.log("render: Async"), 0)
  console.log("render: PokemonHistory:", "appContext", appContext, "historyState", historyState);
  return (
    <section className="pokemonHistory">
      { (console.log("jsx: History start"), <span />) }
      <h2>History of Searched Pokemons</h2>
      <p>Click a pokemon name to see details:</p>
      { (setTimeout(() => console.log("jsx: History Async"), 0), <span />) } {/* exec before useEffect but not guaranteed if you refresh page*/}
      <ul className="listLink">
        {pokemons.map(( pokemon ) => {
          const { key, value } = pokemon;
          return <li key={ key }><a href={ "#"+key } onClick={ ( e ) => onClickWrapper( e, value ) }>{ value }</a></li>;
        })}
      </ul>
      <button onClick={ click }> change history state </button> appContext (appState + mainState): { appContext } historyState: { historyState } {/* re-render PokemonHistory subtree */}
      { (console.log("jsx: History end"), <span />) }
    </section>
  );

}
