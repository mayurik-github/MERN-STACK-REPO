import React from "react"
import { useState} from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import CartItemComponent from "./CartItemComponent"
import CartSummary from "./CartSummary"
import Coupon from "../Coupon/CouponComponent"
import {saveCartToDb} from "../../../state/Cart/cartAction"


let Cart = (props) =>{

    let cartList = useSelector((state) => state.cartReducer)
    let user = useSelector((state) => state.userReducer.User)
    const [isVisible, setIsVisible] = useState(false);

    let dispatchToDB = useDispatch()

    let saveCart = (evt) => {
        setIsVisible(!isVisible)
       
        isVisible && (
            <div>
              <p>This is the content to show/hide.</p>
            </div>
        )
        dispatchToDB(saveCartToDb(cartList,user._id))
        evt.preventDefault();
    }

    let navigate = useNavigate();

    let checkout = (evt)=>{
        saveCart(evt)
        navigate('/checkout');
        evt.preventDefault();
    }

    let recalculate = (cartList)=>{
        let amount = 0, 
            count = 0;
    
        for(let item of cartList) {
            amount += item.quantity * item.price;
            count  += item.quantity; 
        }
    
        return {
            amount, 
            count 
        }
    }


    return(

        <>     
        <div className="content-wrap" >  

            <div class="container-fluid">
                
                <h1 className="title">Shopping Cart</h1>
                {   
                    cartList && cartList.length >= 1 ? 
                    <>
                    <h2>Details</h2>
                    <table className="table table-bordered ">
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
                                cartList.map((item) =>{
                                    return <CartItemComponent item ={item} key = {item._id}/>
                                })
                            }
                           
                                <button className="btn btn-primary" onClick={saveCart}>Save</button>
                                <button className="btn btn-primary" onClick={checkout}>Checkout</button>
                        
                        </tbody>
                    </table>
                    <CartSummary data={recalculate(cartList)} readOnly={props.readOnly} />
                    <Coupon />
                    </>
                    : 
                    <div >  
                        <h2>No items in the cart.</h2>
                    </div>
                    
                }
                
            </div>
        </div>
    
        </>
        
    )
}
export default Cart