import React, { Component} from "react";

export default class HobbyComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hobbyName: props.hobby.name
        }
    }

    updateHobby = (event)=>{
        let newHobby = this.state;
        alert("New hobby: ", JSON.stringify(newHobby));
        this.props.updateHobby(newHobby);
        event.preventDefault();
    }

    onTextChange = (event)=> {
        let target = event.target;
        let classList = target.classList;
        let value = target.value;

        if(classList.contains("hobbyName")) {
            this.setState(hobbyName: value);
        }
        event.preventDefault();
    }

    render(){
        return(
            <>
                <h1>Hobby Page</h1>
                <section className={"componentClass"}>
                    <div className="form col-md-8">
                        <div className="col-md-12">
                            <b>Student Name</b>
                            <input type="text" className="form-control col-md-6 name" 
                                    value={this.state.name} 
                                placeholder="Student Name" onChange={this.onTextChange} maxLength={40}/>
            
                            <input type="button" className={"btn btn-primary col-md-3 updateHobby"} 
                                    value={"Add Hobby"}  
                                    onClick={this.updateHobby}/>
                        </div>
                    </div>
                </section>
            </>
        )
    }


}