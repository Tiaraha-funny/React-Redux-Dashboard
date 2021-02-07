import state from "../state";
import { createStore } from "redux";
import reducers, { messages } from "../reducers/index";

export const store = createStore(reducers, state);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(messages());
