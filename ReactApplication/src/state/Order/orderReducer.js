import * as ActionType from "../actionTypes"

const initialState = []

let orderReducer = (state = initialState, action) =>{
    switch (action.type){
        case ActionType.SendRecentOrderToStore:
            return [...state, action.payload]

        case ActionType.GetRecentOrdersFromStore:
            return [...state, action.payload]

        case ActionType.RemoveOrderFromStore:
            return []
          
        case ActionType.RemoveDeletedCancelledOrderFormStore:
            return state.filter(order => order._id != action.payload)

        default:
            return state
    }
}

export default orderReducer