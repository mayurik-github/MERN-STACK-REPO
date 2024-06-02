import * as actionTypes from "../actionTypes"

let initialState = {
    User: {
        userName : "testUser",
        password : "abcd",
        street: "address1",
        mobile: 8987898
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