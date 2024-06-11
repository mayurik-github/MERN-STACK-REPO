import React from "react"
import { useState , useRef , useEffect} from "react"
import { connect, useDispatch, useSelector } from "react-redux" //require react UI and mapstateToProps and mapDispatchToProps

import { saveDataToDB } from "../../../state/Product/productAction"

const Product = (props) =>{

let product = useSelector((state)=> state.productReducer.products)
  
let nameRef = useRef("")
let priceRef = useRef("")
let descriptionRef = useRef("")
let ratingRef = useRef("")


const [width, setWidth] = useState(window.innerWidth)


let dispatchToDB = useDispatch()



let clearInput = () => {
    pName.current.value = "";
    pDesc.current.value = "";
    pPrice.current.value = "";
    pRating.current.value = "";
}

const saveProduct = (evt) =>{
    
    let productDetails = {
        name: nameRef.current.value,
        price: priceRef.current.value,
        description: descriptionRef.current.value,
        rating: ratingRef.current.value
    }
    
    dispatchToDB(saveDataToDB(productDetails))
    evt.preventDefault();
}

   
return(
        <>
        <br/>
        <br/>
        <br/>
            <h1>Products Page</h1>
            <form className={"form col-md-10 userHook"} onSubmit={saveProduct}>                
                <label>
                    <b>Product Name :</b>
                    <input type="text" className={"form-control col-md-12 pName"} ref={nameRef}
                    placeholder="Please enter product name" maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Price :</b>
                    <input type="number" className={"form-control col-md-12 pPrice"} ref={priceRef}
                            placeholder="Please enter price" maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Description :</b>
                    <input type="text" className={"form-control col-md-12 pDesc"} ref = {descriptionRef}
                    placeholder="Please enter decsription"  maxLength={20}/>
                </label>
                <br/>
                <label>
                    <b>Rating :</b>
                    <input type="text" className={"form-control col-md-12 pRating"} ref={ratingRef}
                    placeholder="Please enter rating"  maxLength={20}/>
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
export default Product
