import * as actionTypes from "../actionTypes"
import axios from "axios"

export const sendProductsToStore = (newProduct) => {

    return {
        type: actionTypes.SendProductToStore,
        payload: newProduct
    }
}

export const getProductsFromStore = (product) =>{
    return {
        type: actionTypes.GetProductsFromStore,
        payload: product
    }
}

export const getProductFromStore = (product) =>{
    return {
        type: actionTypes.GetProductFromStore,
        payload: product
    }
}

export const updateProduct = (updatedProduct)=>{
    return{
        type: actionTypes.UpdateProduct,
        payload: updatedProduct
    }
}

export const fetchDataFromDB = () =>{

    return(dispatch)=> {
        axios.get("http://localhost:9000/product/api/getProducts")
                .then(collection=>collection.data)
                .then((collection) => {
                   dispatch(getProductsFromStore(collection))
                })
               .catch((err)=> {
                    console.log("Error while retrieving hobbies  ", err)
                });
            }
}

export const saveDataToDB = (newProduct) =>{

    return(dispatch)=> {axios.post("http://localhost:9000/product/api/addProduct", newProduct)
                .then((collection) => {
                    let modifiedProduct = collection.data
                    dispatch(sendProductsToStore(modifiedProduct))
                }).catch((err)=> {
                    console.log("Error while adding/updating product  ", err)
                });
            }
}