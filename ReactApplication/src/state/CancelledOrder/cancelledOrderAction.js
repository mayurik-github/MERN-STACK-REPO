import * as actionTypes from "../actionTypes"

export const deleteCancelledOrderFromStore = (orderId)=>({
    type: actionTypes.SendDeletedOrderToStore,
    payload: orderId
})

export const addCancelledOrderToStore = (order)=>({
    type: actionTypes.SendCancelOrderToStore,
    payload: order
})

export const removeCancelledOrderFromStore = ()=>({
    type: actionTypes.RemoveCancelledOrder
})

export const deleteCancelledOrderFromDB =  (orderId) => {
    return function(dispatch) {

        window.fetch("http://localhost:9000/cancel/api/deleteOrder",{
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({id:orderId})
        })
            .then(response => response.json())
            .then((response) =>{
                console.log("Order deleted: " +orderId)
                console.log("Response: " + response)
                dispatch(deleteCancelledOrderFromStore(orderId))
            }).catch((error)=>{
                console.log("Error while cancelling order " + error)
            })
    }
}

export const saveCancelledOrderToDB =  (cancelledOrder) => {
    return function(dispatch) {

        window.fetch("http://localhost:9000/cancel/api/saveCancelledOrder",{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({order:cancelledOrder})
        })
            .then(response => response.json())
            .then((response) =>{
                console.log("Cancelled order added to db " + cancelledOrder.id)
                dispatch(addCancelledOrderToStore(response))
            }).catch((error)=>{
                console.log("Error while cancelling order " + error)
            })
    }
}

export const getCancelledOrderFromDB =  (userId) => {
    return function(dispatch) {

        window.fetch("http://localhost:9000/cancel/api/getCancelledOrders",{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId:userId})
        })
            .then(response => response.json())
            .then((response) =>{
                console.log("Retrieved cancelled orders from db " + response)

                dispatch(removeCancelledOrderFromStore())
                if(response) {
                    for(const order of response) {
                       dispatch(addCancelledOrderToStore(order)) 
                    }
                }
            }).catch((error)=>{
                console.log("Error while cancelling order " + error)
            })
    }
}

