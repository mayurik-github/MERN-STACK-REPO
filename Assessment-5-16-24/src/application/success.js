import React, {Component} from "react";
import SuccessChild from "./SuccessChild";
import SuccessStory from "./SuccessStory";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./app.css"
import UserSignIn from "./UserSignIn";
import { NavLink } from "react-router-dom";


export default class Success extends Component {

    constructor(props) {
        super(props)
       
        this.state = {
            name : "Mayuri",
            address : "California",
            dataFromStory: ""
        }
    }

    displayValue = (data) => {
        this.setState({dataFromStory: data});
    }
    render() {
        return(
            
           
                <div>
                   <h4>This is Success component..</h4>
                   
                   <SuccessChild name={this.state.name} address={this.state.address} successStoryComponent = {<SuccessStory successCallBack = {this.displayValue} />}/>
                    {/*//4. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success
                    //5. create SuccessStory as another component, pass this as props in SuccessChild from Success component*/}
                    {/*<SuccessStory updateNameInStory = {this.updateNameInSuccess} />*/}
                    <h5>Product name from SuccessStory: {this.state.dataFromStory}</h5>
                </div>
        
            
            
        )
    }
}