import { combineReducers } from "redux";
import usersFamousReducers from "./reducer";

const rootFamousReducers = combineReducers({
       data: usersFamousReducers
});

export default rootFamousReducers