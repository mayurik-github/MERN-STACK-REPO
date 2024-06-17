import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { deleteRecentOrderFromDB } from "../../../state/Order/orderAction"; 
import { saveCancelledOrderToDB } from "../../../state/CancelledOrder/cancelledOrderAction";

let OrderItemComponent = (props) =>{

    let order = props.order
    let orderStatus = 'PROCESSING'
    let dispatchToDB = useDispatch();
    
    let getOrderStatus = () =>{
        console.log(order)
        let DateOfOrder = new Date(order.orderDtTime.toString())

        let dateDiffInDays = Math.ceil((new Date().getTime() - DateOfOrder.getTime()) / 86400000)

        if(dateDiffInDays >= 2){
            orderStatus = 'DELIVERED'
        }
    }

    let cancelOrder = (event) => {
        console.log(order.userId)
        console.log("Deleting recent order from DB: " + order._id)
        dispatchToDB(deleteRecentOrderFromDB(order._id))

        let cancelledOrder ={
            userId: order.userId,
            userName: order.userName,
            order: order.order,
            orderDtTime: new Date()
        }

        console.log("Adding cancelled order to DB: " + cancelledOrder)
        dispatchToDB(saveCancelledOrderToDB(cancelledOrder))
        event.preventDefault()
    }

    return(
        <tr>
            {
                order.order.map((item)=>{
                    return <td>{item.name}</td>
                })  
            }
            <td>{order.orderDtTime}</td>
            {getOrderStatus()}
            {   
                orderStatus == 'DELIVERED' ?
                <td> 
                    Delivered
                </td>
                : 
                <td>
                    Processing
                </td>
            }
          
            {
                orderStatus == 'PROCESSING' ?
                <td> <button className="btn btn-primary" onClick={cancelOrder}>Cancel</button> </td>
                : <td> <button className="btn btn-primary" onClick={review}>Review</button> </td> 
            }
        </tr>

   
 
       
 
    )
}

export default React.memo(OrderItemComponent);