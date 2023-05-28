import React from 'react';
import { uuidArray } from './util';
import { List } from './List';
import { Pokemon } from './Pokemon';

/*
 * Define React stateless functions
 */

export const  App: React.FC = () => {
  const arr:Array<{key:string, value:number}> = uuidArray([0,1,2]);

  return (
    <section>
      <h1>
        Works!!!
      </h1>
      <Pokemon title='my pokemon app!!!' />
      <List items={arr} />
    </section>
  );
}
