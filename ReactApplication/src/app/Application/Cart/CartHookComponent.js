import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {saveCartToDB} from "../../../state/Cart/cartAction"
import CartItemHook from "./CartItemHookComponent"

let CartHook = (props)=> {
    let cartItems = useSelector((state) => state.cartReducer)
    let loggedInUser = useSelector((state) => state.userReducer)
    let dispatchToDB = useDispatch()

    let saveCart = (evt) => {
        dispatchToDB(saveCartToDB(cartItems, loggedInUser.User.userName))
        evt.preventDefault();
    }

    return(
        <>     
        <div>  
            <div class="container">
                <h2 className="title">Cart Details</h2>
                {   
                    cartItems && cartItems.length >= 1 ? 
                    <>
                    
                    <table className="table table-bordered ">
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map((item) =>{ 
                                    return <CartItemHook item ={item}/>
                                })
                            }
                    
                    
                        </tbody>
                    </table>

                    
                    <div class="col-4 mx-auto">
                        <button className="btn btn-primary" onClick={saveCart}>Save Cart</button>
                    </div>
                   

                    <br></br>
         
                  
              
                    </>
                    : 
                    <div>  
                        <h4>Cart is empty.Please add some items.</h4>
                    </div>
                    
                }
            </div>
        </div>
    
        </>
    )

}
export default CartHook;