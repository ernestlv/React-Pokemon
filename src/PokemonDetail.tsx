import React from 'react';
import { v4 } from 'uuid';

export const  PokemonDetail: React.FC<PokemonDetailProps> = ({ pokemonDetail }) => {
  const pokemon = pokemonDetail;
  return (
    <section className="pokemonDetail">
      {
        (!pokemon) ?
          <div>Pokemon Not Found</div>
        :
          <div>
            <h2>Pokemon Information</h2>
            <h3>
              <img src={ pokemon.sprites.other.dream_world.front_default } />
              <span>{ pokemon.name }</span>
            </h3>
            <div className="pokemonSprites">
              {
                Object.keys( pokemon.sprites ).filter(( k:string ) => k !== 'other' && k !== 'versions' && pokemon.sprites[k] !== null).map(( k:string, i:number ) => {
                  return <img key={ i } src={ pokemon.sprites[k] } />
                })
              }
            </div>
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
      }
    </section>
  );
}
