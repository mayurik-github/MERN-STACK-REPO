import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';

import userReducer  from "./User/userReducer";
import studentReducer from "./Student/studentReducer";
import hobbyReducer from "./Hobby/hobbyReducer";
import productReducer from "./Product/productReducer"
import cartReducer from "./Cart/cartReducer";
import checkoutReducer from "./Checkout/checkoutReducer"
import couponReducer from "./Coupon/couponReducer";

let rootReducer = combineReducers({
    userReducer,
    studentReducer,
    hobbyReducer,
    productReducer,
    cartReducer,
    checkoutReducer,
    couponReducer
})

export default configureStore(
    {reducer: rootReducer},
    {},
)