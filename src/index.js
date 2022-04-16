import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./Product_Shirt.json";

// javascript code store the json to local storage
// let products_array = require("./Product_Shirt.json");
// console.log(products_array);

//
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
