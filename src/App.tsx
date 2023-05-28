import React from 'react';
import { uuidArray } from './util';
import { List } from './List';

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
      <List items={arr} />
    </section>
  );
}
