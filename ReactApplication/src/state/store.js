import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';

import userReducer  from "./User/userReducer";
import studentReducer from "./Student/studentReducer";

let rootReducer = combineReducers({
    userReducer,
    studentReducer
})

export default configureStore(
    {reducer: rootReducer},
    {},
)