import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

let CartItemHook = (props)=> {
    let item = props.item
    console.log("Cart item hook="+item.product.name)
    return(
      
        <tr>
           <td>{item.product.name}</td>
           <td>${item.product.price}</td>
           <td>{item.product.desc}</td>
           <td>{item.product.rating}</td>
       </tr>

   )
}

export default CartItemHook;