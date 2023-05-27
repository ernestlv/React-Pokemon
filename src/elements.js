/*
 * Define React stateless functions
 */

 export const list = function(props) { //this props is provided by react
    return React.DOM.ul(null, props.items.map((item, i) => React.DOM.li({key:i}, item))); //React.DOM is a factory
 }
