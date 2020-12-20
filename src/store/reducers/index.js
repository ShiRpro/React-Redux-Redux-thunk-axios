import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import AddCityReducer from "./AddCityReducer";
import thunk from "redux-thunk";
const allReducers = combineReducers({
    ArrCity: AddCityReducer,
});

export const store = createStore(allReducers, compose(applyMiddleware(thunk)))