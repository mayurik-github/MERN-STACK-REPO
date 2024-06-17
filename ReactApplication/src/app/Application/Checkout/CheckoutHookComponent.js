import React from "react"
import {useSelector, useDispatch} from "react-redux";
import CartItemComponent from "../Cart/CartItemComponent";
import { saveRecentOrderToDB } from "../../../state/Order/orderAction";
import { saveCartToDb } from "../../../state/Cart/cartAction";
import { clearCart } from "../../../state/Cart/cartAction";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    let cartData = useSelector((state)=>state.cartReducer)
    let user = useSelector((state)=>state.userReducer.User)
    let dispatchToDb = useDispatch()

    let makePayment = (event) => {
        const orderInforForCart = {
            userId: user._id,
            userName: user.userName,
            order: cartData,
            status: 'PROCESSING',
            orderDtTime: new Date()
        }
        dispatchToDb(saveRecentOrderToDB(orderInforForCart))
        dispatchToDb(clearCart())
        cartData = []
        dispatchToDb(saveCartToDb(cartData,user._id))
        goToRecentOrders()
        event.preventDefault()
    }
    let navigate = useNavigate();
    let goToRecentOrders = ()=>{
        navigate('/recentOrders');
    }
    return(
        <>
        <div className="content-wrap" > 
        
       
        <div class="container-fluid">
            <br /><br />
            <h1 className="title">Checkout Page</h1> 
            <br />
        </div>
        {
            user && cartData && cartData.length >= 1 ? 
            <div>
                <table  className="table table-light table-bordered ">
                    <thead>
                        <tr>
                            <th>User Info and Address</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                            <td> {user.userName}, {user.street}  <br />
                                {user.mobile} <br />
                            </td>
                        </tr>
        
                    </tbody>
                </table>
                <h2>Cart details</h2>
                <table  className="table table-light table-bordered ">
                    <thead>
                        <tr>
                            <th scope="col" >Item</th>
                            <th scope="col" >Price</th>
                            <th scope="col">Description</th>
                            <th scope="col" >Rating</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">SubTotal</th>
                        </tr>
                    </thead>
                    <tbody  class="table-group-divider">
                        {
                            cartData.map((item) =>{
                                return <CartItemComponent item ={item} key = {item._id}/>
                            })
                        }
                        <button className="btn btn-warning" onClick={makePayment}>Make Payment</button>
                    </tbody>
                </table>
            </div> 
            :""
        }
        </div>
        </>
    )
    

}

export default Checkout
