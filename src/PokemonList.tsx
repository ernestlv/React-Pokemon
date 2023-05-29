import React from 'react';
import { ListLink } from './ListLink';
import { v4 } from 'uuid';

export class PokemonList extends React.Component<PokemonProps, PokemonState> {

  constructor(props:PokemonProps){
    super(props);
    this.state = {
      pokemonList:[]
    };
    this.clickListLink = this.clickListLink.bind(this);
  }

  render() {
    const { title } = this.props;
    const { pokemonList } = this.state;
    const items = pokemonList.map((pokemon) => ({ key: v4(), value: pokemon.name }));
    return (
      <div>
        <h2>{title}</h2>
        <ListLink items={ items } onClick={ this.clickListLink }/>
      </div>
    );
  }

  async componentDidMount() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const json = await response.json();
    this.setState({
      pokemonList:json.results
    });
    console.log("componentDidMount!!!", json);
  }

  clickListLink( item:any ) {
    alert(item.value)
  }
}
