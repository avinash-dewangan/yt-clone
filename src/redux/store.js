import { createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth.reducer";
// const intialState = {
//   name: "avi",
//   age: "21",
// };

//const reducer = (intialState) => intialState;

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
