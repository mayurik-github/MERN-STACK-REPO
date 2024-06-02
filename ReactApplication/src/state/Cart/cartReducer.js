import * as actionTypes from "../actionTypes"

let initialState = []

let cartReducer = (state=initialState, action)=>{
    switch(action.type) {
        case actionTypes.ADD_ITEM_TO_STORE:
            return [...state, action.payload]
        
        default:
            return state
    }
}
export default cartReducer;