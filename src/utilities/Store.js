import { createStore } from "redux";
import { loadState } from "./LocalStorage";

export const loadStore = reducers => {
  return loadState() === undefined
    ? createStore(reducers)
    : createStore(reducers, loadState());
};
