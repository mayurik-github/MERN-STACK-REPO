import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, Fragment } from "react";
import { deleteItemFromCart, updateItemFromCart } from "../../../state/Cart/cartAction";

let CartItemComponent = (props) =>{

    let item = props.item
    let [quantity, setQuantity] = useState(item.quantity)

    let dispatchItem = useDispatch();

    let increaseQty = () =>{
        setQuantity(++quantity)
        dispatchItem(updateItemFromCart(item._id, quantity))
    }

    let decreaseQty = () =>{
        if(quantity > 1){
            setQuantity(--quantity)
            dispatchItem(updateItemFromCart(item._id, quantity))
        }
    }

    return(
      
         <tr>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td>{item.description}</td>
            <td>{item.rating}</td>
            <td>
                <button onClick={decreaseQty}>-</button>{quantity}
                <button onClick={increaseQty}>+</button>
                  
            </td>
            <td>${quantity*item.price}</td>
            
        </tr>

    )
}

export default CartItemComponent