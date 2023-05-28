import React from 'react';
import { List } from './List';

/*
 * Define React stateless functions
 */

export const  App: React.FC = () => {
  const arr:Array<{key:string, value:number}> = [{key:'0', value:0}, {key:'1', value:1}, {key:'2', value:2}];

  return (
    <section>
      <h1>
        Works!!!
      </h1>
      <List items={arr} />
    </section>
  );
}
