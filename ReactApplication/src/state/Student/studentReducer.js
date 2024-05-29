import * as actionTypes from "../actionTypes"

let initialState = {
    student: {
        name: "Student1",
        age: 20,
        grade: 11,
        address: "Florida"
    }
}

let studentReducer = (state=initialState, action)=> {
    console.log("Inside student reducer")
    switch(action.type) {
        case actionTypes.ADD_STUDENT_TO_STORE:
            console.log("Inside student reducer, action.payload ", action.payload)
            return {...state, student: action.payload}
        default:
            return state
    }
}

export default studentReducer;