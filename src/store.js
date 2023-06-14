import { legacy_createStore as createStore } from "redux";
import cartReducer from "./reducers/cartReducer";
import loginReducer from "./reducers/loginReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  login: loginReducer,
  cart: cartReducer
})

const store = createStore(allReducers);

export default store;