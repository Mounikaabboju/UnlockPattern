import { createStore, combineReducers } from "redux";
import { PatternReducer } from "../ReduxComponents/PatternReducer";

const rootReducer = combineReducers({
  PatternReducer
});

const store = createStore(rootReducer);

export default store;
