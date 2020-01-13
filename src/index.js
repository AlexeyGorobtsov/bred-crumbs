import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {bredCrumbReducer} from "./reducers/bread-crumbs-reducer";
import logger from "redux-logger";
import thunk from "redux-thunk"
import App from "./App";
const store = createStore(bredCrumbReducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, rootElement
);
