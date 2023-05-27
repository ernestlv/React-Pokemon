import React from "react";

/*
 * Define React stateless functions
 */

 export const List = function(props) { //props is provided by react
    return <ul>{props.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
 }
