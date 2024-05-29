import {connect} from "react-redux";
import StudentComponent from "./StudentComponent.jsx";
import { AddStudentToStore, SaveStudentToDB } from "../../../state/Student/studentAction.js";

let mapStateToProps = (store)=>{
    return {
        student:store.studentReducer.student
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        updateStudent : (student)=>{
            dispatch(SaveStudentToDB(student))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentComponent)