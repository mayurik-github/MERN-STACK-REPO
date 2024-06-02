import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart } from "../../../state/Cart/cartAction"
import { GetProductsFromDB } from "../../../state/Product/productAction"
import CartHook from "../Cart/CartHookComponent"
import '../../app.css'

let GetProductHook = (props)=> {
    let products = useSelector((state)=>state.productReducer.products);
    let dispatchToDB = useDispatch();
    let dispatchToAddProduct = useDispatch();

    let addToCart =((product)=>{
        dispatchToAddProduct(addProductToCart(product))
    })

    useEffect(()=>{
        dispatchToDB(GetProductsFromDB()) 
    },
    [])
    return (
        <div class="table-container"> 
            <table>
                <tr><td>
                <tr>
                     <th>Product Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Action</th>
                </tr>
                { products && products.length >= 1 ? 
                    products.map((product) => {
                    return (
                        <tr>
                            <td>{product.name}</td>
                            <td>{product.desc}</td>
                            <td>{product.price}</td>
                            <td>{product.rating}</td>
                            <td><button className='btn btn-primary' onClick={()=>{addToCart(product)}}>Add to cart</button></td>
                        </tr>
                    ) 
                }): <h4>No products available.</h4>}
                </td></tr>
            </table>
            <table>
                <tr><td><CartHook /></td></tr>
            </table>
        </div>
        
    );
}
export default GetProductHook;