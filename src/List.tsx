import React from 'react';

/*
 * Define React stateless functions
 */

export const List:React.FC<ListProps> = ({ items }) => { //  items is provided by react
  return (
    <ul className="list">
      {items.map((item) => {
        const { key, value } = item;
        return <li key={key}>{ value }</li>;
      })}
    </ul>
  );
}
