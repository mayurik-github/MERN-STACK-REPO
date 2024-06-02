import * as actionTypes from "../actionTypes"

let initialState = {
    products:[],
    Product: {
        name: "",
        desc:  "",
        rating:0,
        price:0
    }
}

let productReducer = (state=initialState, action)=>{
    switch(action.type) {
        case actionTypes.ADD_PRODUCT_TO_STORE:
            return {...state, products: action.payload}
        
        case actionTypes.FETCH_PRODUCTS:
            return {...state,products: action.payload}
        
        default:
            return state
    }
}

export default productReducer;