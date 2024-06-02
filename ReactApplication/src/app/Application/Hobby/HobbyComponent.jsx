import React, { Component} from "react";

export default class HobbyComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hobbyName: props.hobby.hobbyName
        }
    }

    updateHobby = (event)=>{
        let newHobby = this.state.hobbyName;
        this.props.updateHobby(newHobby);
        event.preventDefault();
    }

    onTextChange = (event)=> {
        let target = event.target;
        let classList = target.classList;
        let value = target.value;

        if(classList.contains("hobbyname")) {
            this.setState({hobbyName: value});
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
                            <b>Hobby Name</b>
                            <input type="text" className="form-control col-md-6 hobbyname" 
                                    value={this.state.hobbyName} 
                                placeholder="Hobby Name" onChange={this.onTextChange} maxLength={40}/>
            
                            <input type="button" className={"btn btn-primary col-md-3 updateHobby"} 
                                    value={"Add Hobby"}  
                                    onClick={this.updateHobby}/>

                            <input type="button" className={"btn btn-primary col-md-3 getHobbies"} 
                                    value={"Get Hobbies"}  
                                    onClick={this.getHobbies}/>
                        </div>
                    </div>
                </section>
            </>
        )
    }


}