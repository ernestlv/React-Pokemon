/*
*
* Handles immutable arrays
*
*/
export function print(...msg) {
  const timestamp = new Date();
  console.log(`${timestamp}: ${msg.join(', ')}`);
}

export function first(arr) {
  const [item] = arr;
  return item;
}

export function last(arr) {
  const [item] = arr.reverse();
  return item;
}

export function middle(arr) {
  const [...remain] = arr; // eslint required
  const [...rest] = remain.shift().reverse();
  return rest.shift().reverse();
}

export function replace(orgElement, newElement, arr) {
  return arr.map((element) => (element === orgElement ? newElement : element));
}

export function max(arr, init = 0) {
  return arr.reduce((maxValue, element) => (element > maxValue ? element : maxValue), init);
}

export function min(arr, init = Infinity) {
  return arr.reduce((minValue, element) => (element < minValue ? element : minValue), init);
}

export function pairs(obj) {
  return Object.keys(obj).map((key) => ({ key, value: obj[key] }));
}

export function objectify(arr) {
  return arr.reduce((obj, { key, value }) => {
    const obj2 = { ...obj }; // eslint required
    obj2[key] = value;
    return obj2;
  }, {});
}

export function unique(arr) {
  return arr.reduce((res, element) => (res.indexOf(element) === -1 ? [...res, element] : res), []);
}

export function sort(arr) {
  return [...arr].sort((a, b) => a - b); // sort asc
}

export function sortDesc(arr) {
  return [...arr].sort((a, b) => b - a); // sort desc
}

export function compose(...fns) { // compose an array of fn with single arg
  return (arg) => fns.reduce((currentArg, fn) => fn(currentArg), arg);
}
