## React & Redux with Hooks
React Application implementing Redux pattern through react-redux (useSelector & useDispatch) and annotated with TypeScript

##Technology Stack

- Node 18.15.0
- npm 9.6.7
- Webpack 5
- Babel 7
- React 18
- Redux 4
- react-redux 8
- ESLint 8 with airbnb rules
- TypeScript 5

##Run

- npm install
- npm run build
- npm start
- go to http://localhost:8080 (first time might take a few seconds)

##Usage Instructions

The interface has two fields, first open text field is to manually enter any pokemon name then click search in the button next to it; the second field is a dropdown that provides a list of name suggestions to search for a pokemon, click on the search button next to it to search.

The results area is divided into three sectional columns; the leftmost column shows a list of searched pokemon names, you can click on any name to revist that pokemon. The middle column shows the pokemon sprites and name just beneath the main sprite. The third column shows the pokemon most popular stats.


##Improvements

1) Fix search fields to properly clear value after search is click.
2) Add browsing functionality to search pokemons by browsing next / prev links
3) Add expandable sections for long list stats
4) Interface support desktop and tablet. However we need to add media query to support smartphones.
5) Improve interface colors and layout to make it more adaptive.
