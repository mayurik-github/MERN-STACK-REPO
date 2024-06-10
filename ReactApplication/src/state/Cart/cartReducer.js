import * as actionTypes from "../actionTypes"

const initialState = []


let cartReducer = (state = initialState, action) =>{

    switch(action.type){

        case actionTypes.AddItemToCart:
            return [...state, action.payload]
        
       
        case actionTypes.UpdateItemFromCart:

            return state.map((item) => {
                if(item._id == action.payload.id){
                    return {...item, quantity: action.payload.qty}
                }
                return item
            })

        default:
            return state
    }
}

export default cartReducer