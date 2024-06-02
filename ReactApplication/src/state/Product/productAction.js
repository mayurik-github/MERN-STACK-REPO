import * as actionTypes from "../actionTypes"
import axios from "axios"

export const AddProductToStore = (product) => {
    return {
        type: actionTypes.ADD_PRODUCT_TO_STORE,
        payload: {product}
    }
}

export const FetchProductsFromStore = (products) => {
    return {
        type: actionTypes.FETCH_PRODUCTS,
        payload: products
    }
}

export const SaveProductToDB = (newProduct)=> {
    return(dispatch)=> {
        
        axios.post("http://localhost:9000/product/api/addProduct", newProduct)
                .then((collection) => {
                    let modifiedProduct = collection.data
                    dispatch(AddProductToStore(modifiedProduct))
                }).catch((err)=> {
                    console.log("Error while adding/updating product  ", err)
                })
    }
}

export const GetProductsFromDB = ()=> {
    
    return(dispatch)=> {
        axios.get("http://localhost:9000/product/api/getProducts")
                .then(collection=>collection.data)
                .then((collection) => {
                   dispatch(FetchProductsFromStore(collection))
                })
               .catch((err)=> {
                    console.log("Error while retrieving hobbies  ", err)
                });
                
    }
}