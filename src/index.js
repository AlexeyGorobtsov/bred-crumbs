import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {reducer} from "./reducers";
import logger from "redux-logger";
import App from "./App";
const store = createStore(reducer, applyMiddleware(logger));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
    , rootElement
);
