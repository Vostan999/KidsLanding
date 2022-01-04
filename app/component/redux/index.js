import { combineReducers, createStore } from "redux";
import customerReducer from "./customerReducer";

const store = createStore(
    combineReducers({
        customer: customerReducer,
    }));

export default store;
