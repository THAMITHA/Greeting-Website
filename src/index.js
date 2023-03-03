import React from "react";
import ReactDom from "react-dom";
import "./index.css";

let cssStyle = {};
let currDate = new Date(2020, 5, 5, 5);
currDate = currDate.getHours();
let greeting = "";

if (currDate >= 1 && currDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = "Green";
} else if (currDate >= 12 && currDate < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "Yellow";
} else {
  greeting = "Good Evening";
  cssStyle.color = "Orange";
}
ReactDom.render(
  <h1>
    Hello Sir <span style={cssStyle}>{greeting}</span>
  </h1>,
  document.getElementById("root")
);
