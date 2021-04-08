import { combineReducers } from "redux";
import reducer from "./Reducer";

const reducers = combineReducers({ repositories: reducer });

export default reducers;
