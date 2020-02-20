import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";

import { pokeReducer } from "./reducers/pokeReducer";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

const store = createStore(pokeReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
