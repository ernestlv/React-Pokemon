import React from 'react';
import { unique } from './util';
import { PokemonForm } from './PokemonForm';
import { PokemonHistory } from './PokemonHistory';
import { PokemonDetail } from './PokemonDetail';

export class App extends React.Component<AppProps, AppState> {

  constructor(props:any){
    super(props);
    this.state = {
      pokemonsSuggested:[],
      pokemonsSearched: [],
      pokemonDetail: null
    };
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    const { pokemonsSuggested, pokemonsSearched, pokemonDetail } = this.state;

    return (
      <section className="pokemonApp">
        <h1>
          Pokemon Search
        </h1>
        <PokemonForm pokemonsSuggested={ pokemonsSuggested } onSubmit={ this.onSubmit }/>
        <hr />
        <PokemonHistory pokemonsSearched={ pokemonsSearched } onClick={ this.onClick } />
        <PokemonDetail pokemonDetail={ pokemonDetail } />
      </section>
    );
  }

  async componentDidMount() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const json = await response.json();
    this.setState({
      pokemonsSuggested:json.results
    });
  }

  onClick( e:any, pokemonName:string ) {
    e.preventDefault();
    this.searchPokemon( pokemonName );
  }

  onSubmit( e:any, pokemonName:string ) {
    e.preventDefault();
    this.updatePokemonHistory( pokemonName );
    this.searchPokemon( pokemonName );
  }

  updatePokemonHistory( pokemonName:string ) {
    const { pokemonsSearched } = this.state;
    this.setState({
      pokemonsSearched: unique([pokemonName, ...pokemonsSearched])
    });
  }

  async searchPokemon( pokemonName:string ) {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonName);
      const pokemonDetail = await response.json();
      this.setState({
        pokemonDetail: pokemonDetail
      });
    } catch( e ) {
      this.setState({
        pokemonDetail: null
      });
    }

  }

}
