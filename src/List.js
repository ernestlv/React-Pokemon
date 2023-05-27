import React from 'react';

/*
 * Define React stateless functions
 */

export default function List({ items }) { //  items is provided by react
  return (
    <ul>
      {items.map((item) => {
        const { id } = item;
        return <li key={id}>{ item[id] }</li>;
      })}
    </ul>
  );
}
