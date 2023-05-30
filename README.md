# React-Pokemon
React Pokedex Application

##Technology Stack
Webpack 5
Babel 7
React 18
Redux 4
ESLint 8 with airbnb rules
TypeScript 5

##Run

npm install
npm run build
npm run dev
go to http://localhost:8080

##Usage Instructions

The interface has two fields, first open text field is to manually enter any pokemon name then click search in the button next to it; the second field is a dropdown that provides a list of name suggestions to search for a pokemon, click on the search button next to it to search.

The results area is divided into three sectional columns; the leftmost column shows a list of searched pokemon names, you can click on any name to revist that pokemon. The middle column shows the pokemon sprites and name just beneath the main sprite. The third column shows the pokemon most popular stats.

##Business Requirements

- Use the Pokemon API to make API requests for data https://pokeapi.co/docs/v2.  => Done.
- Able to search for any Pokemon => Done.
- Able to see a history of what has been searched and revisit at anytime. => Done.

##Technical Requirements

- This project should be done with the latest React framework. => Done.
- This project should be done with the latest Redux framework. => Done.
- This project should be done using TypeScript. => Done.
- This project should be done using version control, preferably git. => Done.
- This project can be styled with SCSS/CSS or Styled Components if anything needs to be styled. => Done. (We used CSS)
- This project should include a README. => Done.

##Bonus Points

- Able to see details about abilities, moves, species, sprites and types upon searching. => Done.

##Improvements

1) Fix search fields to properly clear value after search is click.
2) Add browsing functionality to search pokemons by browsing next / prev links
3) Add expandable sections for long list stats
4) Interface support desktop and tablet. However we need to add media query to support smartphones.
5) Improve interface colors and layout to make it more adaptive.
