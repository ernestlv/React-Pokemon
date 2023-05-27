import './styles.css';
import React from "react";
import { createRoot } from "react-dom/client";
import { print, first, last, middle, replace, pairs, max, min, sort, sortDesc } from "./util";
import { List } from "./elements";

print("React Program Start!");

const arr = [0,1,2,3,4];
const container = document.getElementById("react-container");
const root = createRoot(container);
const el = <List items={arr} />;
console.log(el);
root.render(el);
