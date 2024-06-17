import * as actionTypes from "../actionTypes";
import axios from "axios";
import { getUserCart } from "../Cart/cartAction";

export const AddUserToStore = (user) => {
    return {
        type: actionTypes.ADD_USER_TO_STORE,
        payload : user
    }
}

export const SaveUserToDB = (newUser) => {
    return (dispatch) => {
        axios.post("http://localhost:9000/user/api/signinup", newUser)
                .then((collection)=> {
                    let loggedUser = collection.data
                    console.log(loggedUser)

                    dispatch(AddUserToStore(loggedUser))
                    dispatch(getUserCart(loggedUser._id))
                }).catch((err)=> {
                    console.log("Error while logging in ", err)
                })
    }
}

export const SaveUserToDBUsingFetch = (newUser)=>{
    return (dispatch)=>{
        window.fetch("http://localhost:9000/user/api/signinup",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({newUser})})
            .then((response)=>response.json())
            .then((userData)=>{
                console.log(userData)
                dispatch(AddUserToStore(userData))
                dispatch(getUserCart(userData._id))
            }).catch((err)=>{
                console.log("error while logging in ", err)
        })
    }
}