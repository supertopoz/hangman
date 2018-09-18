import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import student from "./src/reducers/studentDetailsReducer.js";
import pageAnimations from "./src/reducers/pageAnimations.js";
import user from "./src/reducers/userReducer.js";

export default createStore(
    combineReducers({ student, user, pageAnimations }), {},
    applyMiddleware(createLogger())
);