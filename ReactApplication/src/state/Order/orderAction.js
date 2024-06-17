import * as actionTypes from "../actionTypes"
import axios from "axios"

export const sendRecentOrderToStore = (newOrder) => {

    return {
        type: actionTypes.SendRecentOrderToStore,
        payload: newOrder
    }
}

export const getRecentOrdersFromStore = (order) =>{
    return {
        type: actionTypes.GetRecentOrdersFromStore,
        payload: order
    }
}

export const removeOrder = () =>({
    type: actionTypes.RemoveOrderFromStore
})

export const sendDeletedOrderToStore = (orderId)=>({
    type: actionTypes.RemoveDeletedCancelledOrderFormStore,
    payload: orderId
})

export const saveRecentOrderToDB = (newOrder) =>{
    return(dispatch)=> {
        axios.post("http://localhost:9000/order/api/saveOrder", newOrder)
                .then((collection) => {
                    let modifiedOrder = collection.data
                    dispatch(sendRecentOrderToStore(modifiedOrder))
                }).catch((err)=> {
                    console.log("Error while adding/updating order  ", err)
                });
            }
}

export const deleteRecentOrderFromDB = (orderId) =>{
    console.log("Deleting order from DB:  " + orderId)
    return function(dispatch){

        window.fetch("http://localhost:9000/order/api/deleteOrder",{
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({orderId:orderId})
        })
        .then(response =>response.json())
        .then((response) =>{
    
            dispatch(sendDeletedOrderToStore(orderId))
            console.log("Order delete from store. ")
        })
        .catch((error)=>{
            console.log("Error while deleting order from db " + error)
        })
    }
}

export const fetchOrdersFromDB = (userId) =>{

    //return(dispatch)=> {
        // axios.get("http://localhost:9000/order/api/getOrders", {
        //     params: {
        //       userId: userId
        //     }
        //   })
        //         .then(collection=>collection.json())
        //         .then((collection) => {
        //             console.log("successfully retrieved order from db " + collection)
        //             dispatch(removeOrder())

        //             if(collection){
        //                 for(const order of collection){
        //                     console.log("Order=" + order)
        //                     dispatch(sendRecentOrderToStore(order))
        //                 }
        //             }
                   
        //         })
        //        .catch((err)=> {
        //             console.log("Error while retrieving orders  ", err)
        //         });
        //     }
    //}

    return function(dispatch){

        window.fetch("http://localhost:9000/order/api/getOrders",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId:userId})
        })
        .then(response => response.json())
        .then((response) =>{
            console.log("successfully retrieved order from db " + response)
            

            if(response){
                console.log("Recent order is available")
                dispatch(removeOrder())
                for(const order of response){
                
                    dispatch(sendRecentOrderToStore(order))
                }
            }

        })
        .catch((err)=>{
            console.log("error while retrieving order from db " + err)
        })
    }
}