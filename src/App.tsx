import React from 'react';
import { PokemonList } from './PokemonList';
import { PokemonForm } from './PokemonForm';

export class App extends React.Component<AppProps, AppState> {

  constructor(props:any){
    super(props);
    this.state = {
      pokemonList:[]
    };
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    const { pokemonList } = this.state;

    return (
      <section>
        <h1>
          Pokemon App
        </h1>
        <PokemonList title='List of Pokemons' pokemonList={ pokemonList } onClick={ this.onClick } />
        <PokemonForm onSubmit={ this.onSubmit }/>
      </section>
    );
  }

  async componentDidMount() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const json = await response.json();
    this.setState({
      pokemonList:json.results
    });
  }

  onClick( e:any, item:any ) {
    e.preventDefault();
    alert("click!!!"+item.value);
  }

  onSubmit = ( e:any, input:any ) => {
    e.preventDefault();
    const pokemonName = input.value;
    alert("submitted!" + pokemonName);
  }

}
