import React, { useRef, useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {SaveStudentToDB, SaveStudentToDBUsingFetch} from "../../../state/Student/studentAction";

let StudentHook = (props)=> {
    let student = useSelector((store)=>store.studentReducer.student);
    let[sName, setName] = useState(student.name)
    let[sGrade, setGrade] = useState(student.grade)
    let[sAge, setAge] = useState(student.age)
    let[sAddress, setAddress] = useState(student.address)

    let onTextChange = (evt)=> {
        let value = evt.target.value
        setName(value)
        evt.preventDefault()
    }

    let dispatchToDB = useDispatch()

    let updateStudent = (event)=> {
        let newStudent = {
            name: sName,
            grade: sGrade,
            age:sAge,
            address:sAddress
        }
        dispatchToDB(SaveStudentToDBUsingFetch(newStudent))
        evt.preventDefault();
    }
    return(
        <>
            <h1>Student Page</h1>
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Student Name</b>
                        <input type="text" className="form-control col-md-6 name" 
                                value={sName} 
                            placeholder="Student Name" onChange={onTextChange} maxLength={40}/>
        
                        </div>
                        <div className="col-md-12">
                                <b>Age</b>
                                <input type="number" className="form-control col-md-6 age" value={sAge}  
                                placeholder="Age" onChange={onTextChange} maxLength={40}/>
                        </div>
                        <div className="col-md-12">
                            <b>Grade </b>
                            <input type="number" className="form-control col-md-6 grade" value={sGrade}  
                                    placeholder="Grade" onChange={onTextChange} />
                        </div>
                    
                        <div className="col-md-12">
                            <b>Address </b>
                            <input type="text" className="form-control col-md-6 address" value={sAddress} 
                            placeholder="Address" maxLength="11"
                            onChange={onTextChange} />
                        </div>

                        <input type="button" className={"btn btn-primary col-md-3 updateStudent"} 
                                value={"Add Student"}  
                                onClick={updateStudent}/>
                                
                    </div>
            </section>
        </>
    )
}

export default StudentHook;


