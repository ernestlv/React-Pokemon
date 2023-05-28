import React from 'react';
import { v4 } from 'uuid';
import { List } from './List';

/*
 * Define React stateless functions
 */

export const  App: React.FC = () => {
  const arr:Array<{key:string, value:number}> = [{key:v4(), value:0}, {key:v4(), value:1}, {key:v4(), value:2}];
  console.log(arr);
  return (
    <section>
      <h1>
        Works!!!
      </h1>
      <List items={arr} />
    </section>
  );
}
