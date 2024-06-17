import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';

import userReducer  from "./User/userReducer";
import studentReducer from "./Student/studentReducer";
import hobbyReducer from "./Hobby/hobbyReducer";
import productReducer from "./Product/productReducer"
import cartReducer from "./Cart/cartReducer";
import couponReducer from "./Coupon/couponReducer";
import orderReducer from "./Order/orderReducer";
import cancelledOrderReducer from "./CancelledOrder/cancelledOrderReducer";

let rootReducer = combineReducers({
    userReducer,
    studentReducer,
    hobbyReducer,
    productReducer,
    cartReducer,
    couponReducer,
    orderReducer,
    cancelledOrderReducer
})

export default configureStore(
    {reducer: rootReducer},
    {},
)