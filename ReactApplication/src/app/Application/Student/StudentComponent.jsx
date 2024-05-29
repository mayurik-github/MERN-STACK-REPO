import React, { Component } from "react";

export default class StudentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.student.name,
            age: props.student.age,
            grade:props.student.grade,
            address:props.student.address
        }
    }

    updateStudent = (event)=> {
        let newStudent = this.state;
        alert("New student - " + JSON.stringify(newStudent));
        this.props.updateStudent(newStudent);
        event.preventDefault();
    }

    onTextChange = (event)=> {
        let target = event.target;
        let classList = target.classList;
        let value = target.value;

        if(classList.contains("name")) {
            this.setState({name: value})
        } else if(classList.contains("age")) {
            this.setState({age: value})
        } else if(classList.contains("address")) {
            this.setState({address: value})
        } else if(classList.contains("grade")) {
            this.setState({grade: value})
        }
        event.preventDefault();
    }

    render(){
        return(
            <>
                <h1>Student Page</h1>
                <section className={"componentClass"}>
                    <div className="form col-md-8">
                        <div className="col-md-12">
                            <b>Student Name</b>
                            <input type="text" className="form-control col-md-6 name" 
                                    value={this.state.name} 
                                placeholder="Student Name" onChange={this.onTextChange} maxLength={40}/>
            
                            </div>
                            <div className="col-md-12">
                                    <b>Age</b>
                                    <input type="number" className="form-control col-md-6 age" value={this.state.age} 
                                    placeholder="Age" onChange={this.onTextChange} maxLength={40}/>
                            </div>
                            <div className="col-md-12">
                                <b>Grade </b>
                                <input type="number" className="form-control col-md-6 grade" value={this.state.grade} 
                                        placeholder="Grade" onChange={this.onTextChange} />
                            </div>
                        
                            <div className="col-md-12">
                                <b>Address </b>
                                <input type="text" className="form-control col-md-6 address" value={this.state.address} 
                                placeholder="Address" maxLength="11"
                                onChange={this.onTextChange} />
                            </div>

                            <input type="button" className={"btn btn-primary col-md-3 updateStudent"} 
                                    value={"Add Student"}  
                                    onClick={this.updateStudent}/>
                                    
                        </div>
                </section>
            </>
        )
    }
}