import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import reducers from "./reducers";
import { loadStore, saveState } from "./utilities";
import { Provider } from "react-redux";

const store = loadStore(reducers);
store.subscribe(() => {
  saveState(store.getState());
  console.log("STATE: ", store.getState());
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
