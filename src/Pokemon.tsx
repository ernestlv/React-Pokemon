import React from 'react';

export class Pokemon extends React.Component<PokemonProps> {

  constructor(props:PokemonProps){
    super(props);
  }

  render() {
    const { title } = this.props;
    
    return (
      <h1>{title}</h1>
    );
  }
}
