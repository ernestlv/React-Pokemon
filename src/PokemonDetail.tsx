import React from 'react';

const  NoPokemon:React.FC = () => {
  return (<div>Pokemon Not Found</div>);
}

const  Pokemon:React.FC<{ [key:string]:any }> = ({ pokemonDetail }) => {
  const pokemon = pokemonDetail;

  return (
    <div>
      <div className="pokemonSprites">
        <div>
          <img src={ pokemon.sprites.other.dream_world.front_default } />
        </div>
        <h3 className="pokemonName">{ pokemon.name }</h3>
        <div>
          {
            Object.keys( pokemon.sprites ).filter(( k:string ) => k !== 'other' && k !== 'versions' && pokemon.sprites[k] !== null).map(( k:string, i:number ) => {
              return <img key={ i } src={ pokemon.sprites[k] } />
            })
          }
        </div>
      </div>
      <div className="pokemonStats">
        <h3>
          Stats
        </h3>
        <dl>
          <dt>height / weight:</dt><dd>{ pokemon.height } / { pokemon.weight }</dd>
          <dt>Stats:</dt><dd><ul>
            {
              pokemon.stats.map(( stat:any, i:number ) => <li key={ i }><span>{ stat.stat.name }</span> : <span>{ stat.effort }</span> / <span>{ stat.base_stat }</span></li>)
            }
          </ul></dd>
          <dt>Abilities:</dt><dd><ul>
            {
              pokemon.abilities.map(( ability:any, i:number ) => <li key={ i }>{ ability.ability.name }</li>)
            }
          </ul></dd>
          <dt>Forms:</dt><dd><ul>
            {
              pokemon.forms.map(( form:any, i:number ) => <li key={ i }>{ form.name }</li>)
            }
          </ul></dd>
          <dt>Types:</dt><dd><ul>
            {
              pokemon.types.map(( typeX:any, i:number ) => <li key={ i }>{ typeX.type.name }</li>)
            }
          </ul></dd>
          <dt>Moves:</dt><dd><ul>
            {
              pokemon.moves.map(( move:any, i:number ) => <li key={ i }>{ move.move.name }</li>)
            }
          </ul></dd>
        </dl>
      </div>
    </div>
  );
}

export const  PokemonDetail:React.FC<PokemonDetailProps> = ({ pokemonDetail }) => { // props is passed by react as an obj
  return (
    <section className="pokemonDetail">
      <h2>Pokemon Information</h2>
      {
        ( !pokemonDetail ) ? <NoPokemon /> : <Pokemon pokemonDetail={ pokemonDetail } />

      }
    </section>
  );
}
