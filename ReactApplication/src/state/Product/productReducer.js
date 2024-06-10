import * as ActionType from "../actionTypes"

const initialState = {
    products:[],
    default : {
        name: "",
        price: "",
        description: "",
        rating: ""
    }
}

let productReducer = (state = initialState, action) =>{
    
    switch (action.type){
        case ActionType.SendProductToStore:
            return {...state, products : action.payload}

        case ActionType.GetProductsFromStore:
            return {...state, products : action.payload}

        case ActionType.GetProductFromStore:
            return {products: action.payload}

        case ActionType.UpdateProduct: 
            return {...state, products : action.payload}
          
        default:
            return state
    }
}

export default productReducer