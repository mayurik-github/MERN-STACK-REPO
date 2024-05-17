import React, {Component} from "react";
import * as ReactDOM from "react-dom/client";
import Success from "./application/success";
import Home from "./application/home";

console.log("In index.js file")
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Home/>
)
