import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SaveProductToDB } from "../../../state/Product/productAction";


let ProductHook = (props)=> {

    let Product = useSelector((store)=>store.productReducer.Product)

    let pName = useRef(null)
    let pPrice = useRef(null)
    let pDesc = useRef(null)
    let pRating = useRef(null)
    let updateVal = (val)=>{};

    useEffect(()=> {
        console.log("In useEffect...")

        pName.current.value = Product.name
        pPrice.current.value = Product.price
        pDesc.current.value = Product.desc
        pRating.current.value = Product.rating
    }, [])

    let readFormData = (evt) => {
        alert(pName.current.value)
        alert(pDesc.current.value)
        evt.preventDefault()
    }

    let onTextChange = (e) => {
        let target = event.target;
        let classList = target.classList;
        let value = target.value;

        if(classList.contains("pName")) {
            pName.current.value = value
        } else if(classList.contains("pDesc")) {
            pDesc.current.value = value
        } else if(classList.contains("pPrice")) {
            pPrice.current.value = value
        } else if(classList.contains("pRating")) {
            pRating.current.value = value
        }
        event.preventDefault();
    }

    let clearInput = () => {
        pName.current.value = "";
        pDesc.current.value = "";
        pPrice.current.value = "";
        pRating.current.value = "";
    }

    let dispatchToDB = useDispatch()

    let saveProduct = (evt)=> {
        let newProduct = {
            name : pName.current.value,
            price : pPrice.current.value,
            desc : pDesc.current.value,
            rating : pRating.current.value
        }
        
        dispatchToDB(SaveProductToDB(newProduct))
        evt.preventDefault();
    }
    return(
        <>
            <h1>Products Page</h1>
            <form className={"form col-md-10 userHook"} onSubmit={saveProduct}>                
                <label>
                    <b>Product Name :</b>
                    <input type="text" className={"form-control col-md-12 pName"} ref={pName}
                    placeholder="Please enter product name" onChange={onTextChange} maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Price :</b>
                    <input type="number" className={"form-control col-md-12 pPrice"} ref={pPrice} 
                            placeholder="Please enter price" onChange={onTextChange} maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Description :</b>
                    <input type="text" className={"form-control col-md-12 pDesc"} ref={pDesc}
                    placeholder="Please enter decsription" onChange={onTextChange} maxLength={20}/>
                </label>
                <br/>
                <label>
                    <b>Rating :</b>
                    <input type="text" className={"form-control col-md-12 pRating"} ref={pRating}
                    placeholder="Please enter rating" onChange={onTextChange} maxLength={20}/>
                </label>
                <br/>
                <div class="d-grid gap-2 d-md-block">
                    <input type="submit" className={"btn btn-primary"} value="Add Product" />
                    <button className={"btn btn-primary"} onClick={clearInput} type="button">Reset</button>
                </div>

                
            </form> 
           
        </>
    )
}

export default ProductHook;