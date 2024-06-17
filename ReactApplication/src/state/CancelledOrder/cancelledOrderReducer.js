import * as actionTypes from "../actionTypes"

const initialState = []

let cancelledOrderReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.SendDeletedOrderToStore:
            return state.filter(order => order._id != action.payload) 
        
        case actionTypes.SendCancelOrderToStore:
            return [...state, action.payload]

        case actionTypes.RemoveCancelledOrder:
            return []

        default:
            return state
    }
}

export default cancelledOrderReducer;