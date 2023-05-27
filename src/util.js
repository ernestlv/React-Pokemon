/**
  *
  * Handles immutable arrays
  *
**/
export const print = function (...msg) {
  const timestamp = new Date();
  console.log(`${timestamp}: ${msg.join(', ')}`);
}

export const first = function (arr) {
  const [first] = arr;
  return first;
}

export const last = function (arr) {
  const [last] = arr.reverse();
  return last;
}

export const middle = function (arr) {
  const [first, ...remain] = arr;
  const [last, ...middle] = remain.reverse();
  return middle.reverse();
}

export const replace = function (orgElement, newElement, arr) {
  return arr.map(element => element === orgElement ? newElement : element);
}

export const max = function (arr, init=0) {
  return arr.reduce((max, element) => element > max ? element : max, init);
}

export const min = function (arr, init=Infinity) {
  return arr.reduce((min, element) => element < min ? element : min, init);
}

export const pairs = function (obj) {
  return Object.keys(obj).map(key => ({key, value:obj[key]}))
}

export const objectify = function(arr) {
  return arr.reduce(function (obj, {key, value}) {
     obj[key] = value;
     return obj;
  }, {});
}

export const unique = function(arr) {
  return arr.reduce((unique, element) => unique.indexOf(element) === -1 ? [...unique, element] : unique, []);
}

export const sort = function(arr) {
  return [...arr].sort((a, b) => a - b); //sort asc
}

export const sortDesc = function(arr) {
  return [...arr].sort((a, b) => b - a); //sort desc
}

export const compose = function(...fns) {
  return (arg) => fns.reduce((arg, fn) => fn(arg), arg); //compose an array of fn with single arg
}
