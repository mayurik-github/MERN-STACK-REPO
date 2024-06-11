import * as actionTypes from "../actionTypes"

let initialState = {
    User: {
        userName : "",
        password : "",
        street: "",
        mobile: 0
    }
}

let userReducer = (state= initialState, action) => {

    console.log("User action ", action)

    switch(action.type) {
        case actionTypes.ADD_USER_TO_STORE : 
            return {...state, User: action.payload}
         
        default: 
            return state
    }
}

export default userReducer;