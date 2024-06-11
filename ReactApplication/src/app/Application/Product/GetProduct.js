import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductItemComponent from "./ProductItemComponent";
import { fetchDataFromDB } from "../../../state/Product/productAction";

let GetProduct = (props)=>{

    let products = useSelector((state)=>state.productReducer.products);
    
    let dispatchToDB = useDispatch();

    useEffect(()=>{
        dispatchToDB(fetchDataFromDB()) 
    },
    [])

    return(
        <div className="container">
            <br></br><br/><br/><br/>
            <div className="row">
            
            {
                products && products.length >= 1 ? 
                
                    products.map((product)=>{
                        return  <div className="col-md-4 col-sm-6 my-2" key={product._id}>
                                <ProductItemComponent product={product} />
                        </div>
                    })

                :<h2>No Products To Show</h2>
            }
            </div>
        </div>
    )
}

export default GetProduct;