import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import pageAnimations from "./src/reducers/pageAnimations.js";
import hangman from "./src/reducers/hangmanReducer.js";


export default createStore(
    combineReducers({ pageAnimations, hangman }), {},
    applyMiddleware(createLogger())
);