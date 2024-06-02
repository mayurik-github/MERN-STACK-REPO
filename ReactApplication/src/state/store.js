import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';

import userReducer  from "./User/userReducer";
import studentReducer from "./Student/studentReducer";
import hobbyReducer from "./Hobby/hobbyReducer";
import productReducer from "./Product/productReducer"
import cartReducer from "./cart/CartReducer";

let rootReducer = combineReducers({
    userReducer,
    studentReducer,
    hobbyReducer,
    productReducer,
    cartReducer
})

export default configureStore(
    {reducer: rootReducer},
    {},
)