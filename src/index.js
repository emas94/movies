import React from "react";
import ReactDOM from "react-dom";
import Default from "./templates/default";
import HeroPage from "./components/HeroPage/HeroPage";
import "./assets/styles/reset.css";
import "./assets/styles/fonts.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Default>
    <HeroPage />
  </Default>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
