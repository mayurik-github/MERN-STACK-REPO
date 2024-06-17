import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCancelledOrderFromDB, deleteCancelledOrderFromDB } from "../../../state/CancelledOrder/cancelledOrderAction";
import { fetchOrdersFromDB, deleteRecentOrderFromDB } from "../../../state/Order/orderAction";
import { addItemToCart } from "../../../state/Cart/cartAction"

let Reorder = (props) => {
    let cancelledOrders = useSelector((state)=>state.cancelledOrderReducer)
    let recentOrders = useSelector((state)=>state.orderReducer)

    let user= useSelector((state)=>state.userReducer.User)
    let dispatchToDB = useDispatch()

    useEffect(()=>{
        dispatchToDB(getCancelledOrderFromDB(user._id))
        dispatchToDB(fetchOrdersFromDB(user._id))
    }, [])

    let reorderCancelled = (cancellerOrder) => {
        //for(const order of cancellerOrders.order){
            for(const item of cancellerOrder.order) {
                dispatchToDB(addItemToCart(item))
            }
            dispatchToDB(deleteCancelledOrderFromDB(cancellerOrder._id))
        //}
    }

    let reorderRecentOrder = (recentOrder) => {
        //for(const order of cancellerOrders.order){
            for(const item of recentOrder.order) {
                dispatchToDB(addItemToCart(item))
            }
            dispatchToDB(deleteRecentOrderFromDB(recentOrder._id))
        //}
    }

    return (
        <>
      
            <div className="content-wrap"><br/><br/><br/>
                <h1 className="title">Cancelled Order</h1>
                {   
                    cancelledOrders && cancelledOrders.length >= 1 ?
                    <table  className="table table-bordered ">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                
                            {
                                cancelledOrders.map((cancelledOrder)=>{
                                    return(
                                    <>
                                        <tr>
                                            <td>
                                                {
                                                    cancelledOrder.order.map((item)=>{
                                                        return(
                                                            <>
                                                                <td>{item.name } &nbsp;</td> 
                                                            </>
                                                        )
                                                    })
                                                }    
                                            </td>
                                            <td>{cancelledOrder.orderDtTime}</td>
                                            <td><button className="btn btn-warning" onClick={()=>reorderCancelled(cancelledOrder)}>Reorder</button></td>
                                        </tr> 
                                    </>)
                                })
                            
                            }
                            {
                                recentOrders.map((recentOrder)=>{
                                    return(
                                    <>
                                        <tr>
                                            <td>
                                                {
                                                    recentOrder.order.map((item)=>{
                                                        return(
                                                            <>
                                                                <td>{item.name } &nbsp;</td> 
                                                            </>
                                                        )
                                                    })
                                                }    
                                            </td>
                                            <td>{recentOrder.orderDtTime}</td>
                                            <td><button className="btn btn-warning" onClick={()=>reorderRecentOrder(recentOrders)}>Reorder</button></td>
                                        </tr> 
                                    </>)
                                })
                            
                            }
                        </tbody>
                    </table>
                    :""
                }
            </div>
        </>
    )
}

export default Reorder