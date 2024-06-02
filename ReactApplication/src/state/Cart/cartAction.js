import * as actionTypes from "../actionTypes"
import axios from "axios"

export const addProductToStore = (product) => {
    return {
        type: actionTypes.ADD_ITEM_TO_STORE,
        payload: {product}
    }
}

export const addProductToCart = (product) => {
    return(dispatch)=> {
        dispatch(addProductToStore(product))
    }
    
}

export const saveCartToDB = (cart, userId)=> {
    console.log("Axios call");
    return(dispatch)=> {
        var params = {
            cart: cart,
            userId: userId
          }
        axios.post("http://localhost:9000/cart/api/addCartItems", {userId:userId, cart:cart})
                .then((collection) => {
                    let modifiedCart = collection.data
                }).catch((err)=> {
                    console.log("Error while adding/updating cart  ", err)
                })
    }
}
