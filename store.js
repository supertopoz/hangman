import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import student from "./src/reducers/studentDetailsReducer.js";
import pageAnimations from "./src/reducers/pageAnimations.js";
import hangman from "./src/reducers/hangmanReducer.js";


export default createStore(
    combineReducers({ student, pageAnimations, hangman }), {},
    applyMiddleware(createLogger())
);