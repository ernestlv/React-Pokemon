import React from 'react';
import { ListProps } from './types.d';
/*
 * Define React stateless functions
 */

export const List:React.FC<ListProps> = ({ items }) => { //  items is provided by react
  return (
    <ul>
      {items.map((item) => {
        const { key, value } = item;
        return <li key={key}>{ value }</li>;
      })}
    </ul>
  );
}
