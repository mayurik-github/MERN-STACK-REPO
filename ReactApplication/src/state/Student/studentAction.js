import * as actionTypes from "../actionTypes"
import axios from "axios"

export const AddStudentToStore = (student) => {
    return {
        type: actionTypes.ADD_STUDENT_TO_STORE,
        payload: student
    }
}

export const SaveStudentToDB = (newStudent)=> {
    console.log("Axios call");
    return(dispatch)=> {
        
        axios.post("http://localhost:9000/student/api/addStudent", newStudent)
                .then((collection) => {
                    let modifiedStudent = collection.data
                    console.log(modifiedStudent)
                    dispatch(AddStudentToStore(modifiedStudent))
                }).catch((err)=> {
                    console.log("Error while adding/updating student ", err)
                })
    }
}

export const SaveStudentToDBUsingFetch = (newStudent) => {
    return(dispatch)=> {
        window.fetch("http://localhost:9000/student/api/addUpdateStudent", 
                    {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type' : 'application/json'
                        },
                        body: JSON.stringify(newStudent)
                    }
        ).then((response)=> response.json)
        .then((studentData)=> {
            console.log(userData)
            dispatch(AddStudentToStore(studentData))
        }).catch((err)=>{
            console.log("Error while adding/updating student to DB using fetch ", err)
        })
    }
}