import state from "../state";
import reducers, { rootReducer } from "../reducers/index";
import { createStore } from "redux";

export const store = createStore(rootReducer);