import React from 'react';

/*
 * Define React stateless functions
 */

export const ListLink:React.FC<ListLinkProps> = ({ items, onClick }) => { //  items is provided by react
  return (
    <ul className="listLink">
      {items.map((item) => {
        const { key, value } = item;
        return <li key={ key }><a href={ "#"+key } onClick={ () => onClick( item ) }>{ value }</a></li>;
      })}
    </ul>
  );
}