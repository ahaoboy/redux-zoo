import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { useModel, createStore, Provider } from "@modern-js/runtime/model";
import countModel from "./models/count";
const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App></App></Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
