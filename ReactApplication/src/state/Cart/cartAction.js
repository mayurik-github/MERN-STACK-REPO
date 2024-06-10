import * as actionTypes from "../actionTypes"
import axios from "axios"

export const addItemToCart = (item) => ({
    type: actionTypes.AddItemToCart,
    payload: item
})

export const updateItemFromCart = (id,qty) =>({
    type: actionTypes.UpdateItemFromCart,
    payload: {
        id,
        qty: parseInt(qty)
    }
})


export const saveCartToDb = (cart,userId) => {

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

export const getUserCart = (userid) =>{

    return function(dispatch) {

        window.fetch("http://localhost:9000/cart/api/getUserCart",{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid})})
            .then(response => response.json())
            .then(response =>{

                dispatch(emptyCart())
                if(response){
                    for(const item of response.cart){
                    
                        dispatch(addItemToCart(item))
                    }
                }
            })
    }
}