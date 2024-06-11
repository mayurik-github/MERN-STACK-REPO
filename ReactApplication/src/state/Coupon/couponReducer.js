import * as actionTypes from "../actionTypes"

let initialState = []

let couponReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AddCouponToStore:
            return [...state, action.payload]
        
        default:
            return state
    }
}

export default couponReducer