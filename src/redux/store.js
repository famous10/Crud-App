import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootFamousReducers from "./root-reducer"

const middlewares = [reduxThunk];

if(process.env.NODE_ENV === "development") {
    middlewares.push(logger)
}

const store = createStore(rootFamousReducers, applyMiddleware(...middlewares));

export default store;