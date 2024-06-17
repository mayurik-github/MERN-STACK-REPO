import React from "react";
import { useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { fetchOrdersFromDB } from "../../../state/Order/orderAction";
import RecentOrderItemComponent from "./RecentOrderItemComponent"; 

let RecentOrder = (props)=>{
    let user = useSelector((state)=>state.userReducer.User)
    let orders = useSelector((state)=> state.orderReducer)
    let dispatchToDb = useDispatch()

    useEffect(()=>{

        dispatchToDb(fetchOrdersFromDB(user._id))

    },[])
    console.log("Orders are:  " + orders.data)
    return(

        <>
        <div className="content-wrap" >
        <div className="container-fluid">
        <br/>  
        <h1>Recent orders</h1>
        <h4>User : {user.userName}</h4>
        
        {
            orders ?
            <>
                 <table  className="table table-bordered ">
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                  
                        {
                           orders.map((order)=>{
                               return <RecentOrderItemComponent order = {order} key = {order._id}/>
                            
                           })
                        }                     
                    </tbody>
                </table>
                        
            </>
            : ""
        }
        </div>
        </div>
        </>
    )

}


export default RecentOrder