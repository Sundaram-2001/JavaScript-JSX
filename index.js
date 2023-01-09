import React from "react";
import ReactDom from "react-dom";

const fname = "Sundaram";
const d = new Date();
const year = d.getFullYear();
//const year=2023;

ReactDom.render(
  <div>
    <h1>Created by {fname}!</h1>
    <h3>Created on Copyrirght {year}</h3>
  </div>,
  document.getElementById("root")
);
