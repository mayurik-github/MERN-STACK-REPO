import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";

import { addItemToCart, updateItemFromCart } from "../../../state/Cart/cartAction"

let ProductItemComponent = (props) =>{
    let user = useSelector((state) => state.userReducer.User);
    let cartList = useSelector((state) => state.cartReducer)
    let product = props.product
  
    let dispatchToAddProduct = useDispatch();
    //let [quantity, setQuantity] = useState(state.product.quantity)


    useEffect(()=>{

    },[])

    let addProductToCart = ( product )=>{
        console.log("Product qunatity="+ product.quantity)
            
            let quantity = product.quantity;
    
            cartList && cartList.length >= 1 ? 
            cartList.map((item) =>{
                if(item._id == product._id) {
                    quantity +=item.quantity;
                }
            }):""
        
        console.log("State qunatity="+ quantity)
        dispatchToAddProduct(addItemToCart(product))
        
        dispatchToAddProduct(updateItemFromCart(product._id, quantity))
    }

    return(
        <div className="content-wrap" >
        <div className="card border-dark mb-3">
    
        <img src={`../../../assets/${product.name}.jpg`} height="250" width="400"></img>
         
  
                <div>
                    <p>
                    <h4 >{product.name}</h4>
                       
                            <div>

                                <p className="card-text"> <b>Description:</b> {product.description}</p>
                                <p className="card-text"> <b>Price: </b> ${product.price}</p>
                                <p className="card-text"> <b>Rating:</b> {product.rating}
                                 </p> 
                                <div className="card-footer bg-transparent border-success">
                                    
                                <div className="row">
                                    <div className="col">
                                    <button className="btn btn-warning" onClick={()=>{addProductToCart(props.product)}}>Add To Cart</button>
                                    </div>
                                </div>

                                </div>

                            </div>
                       
                    </p>
                </div>
            </div>
        
            </div>
  
    )
}

export default ProductItemComponent