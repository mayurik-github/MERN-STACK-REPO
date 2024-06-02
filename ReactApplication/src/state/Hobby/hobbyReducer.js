import * as actionTypes from "../actionTypes"

let initialState = {
    hobby: {
        hobbyName: "Hiking"
    },
    hobbies: []
}

let hobbyReducer = (state=initialState, action)=> {
    console.log("Inside Hobby reducer")
    switch(action.type) {
        case actionTypes.ADD_HOBBY_TO_STORE:
            console.log("Inside hobby reducer, action.payload ", action.payload)
            return {...state, hobby: action.payload}

        case actionTypes.FETCH_USER_HOBBIES:
            return {...state,hobbies: action.payload}
        default:
            return state
    }
}

export default hobbyReducer;