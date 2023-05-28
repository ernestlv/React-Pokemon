import React from 'react';

interface ListProps {
  // Declare props here
  items: Array<{key:string; value:number}>;
}

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
