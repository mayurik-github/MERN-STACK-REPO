import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";

import { addItemToCart } from "../../../state/Cart/cartAction"

let ProductItemComponent = (props) =>{
    let user = useSelector((state) => state.userReducer.User);
    let product = props.product
  
    let dispatchToAddProduct = useDispatch();
    let nevigate = useNavigate()

    useEffect(()=>{

    },[])

    let addProductToCart = ( product )=>{

            dispatchToAddProduct(addItemToCart(product))
        
    }

    return(
        <div className="content-wrap" >
        <div className="card border-dark mb-3">
    
        <img src={`../assets/images/${product.name}.jpg`} height="250" width="400"></img>
         
  
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