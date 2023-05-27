import './styles.css';
import { print, first, last, middle, replace, pairs, max, min, sort, sortDesc } from "./util";
import { list } from "./elements";

print("Hello", "World", "!");
var arr = [0,1,2,3];
print(middle(arr));
print(replace(1, 5, arr));
print(pairs({a:1, b:2, c:3}))
print(max(arr));
print(min(arr));
print(sortDesc([4,1,5,7,88,2]));

ReactDOM.render(
  React.createElement(list, {items:[1,2,3]}),
  document.getElementById("react-container")
)
