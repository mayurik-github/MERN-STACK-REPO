import React, {Component} from "react";
import SuccessChild from "./SuccessChild";
import SuccessStory from "./SuccessStory";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./app.css"
import UserSignIn from "./UserSignIn";
import { NavLink } from "react-router-dom";
import Success from "./success";
import ComponentLifecycle from "./ComponentLifecycle";


export default class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name : "Mayuri",
            address : "California",
            successStory : <SuccessStory />
        }
    }
    updateNameInSuccess = (value) => {
        this.setState({
            name: value
        })
    }
    render() {
        return(
            
            <Router classname="topdiv">
                <div>
                   
                    {/*<h3>Name passed from success story: {this.state.name}</h3>*/}
                    {/*//4. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success
                    //5. create SuccessStory as another component, pass this as props in SuccessChild from Success component*/}
                    <Routes>
                        <Route path="Success" element={<Success />} />
                        <Route path="ComponentLifecycle" element={<ComponentLifecycle cityName="Some City" />} />
                        <Route path="UserSignIn" element={<UserSignIn />}/>
                    </Routes>
                    <hr/>
                    <NavLink to="/Success"  className="button" activeclassname="true"> Success  </NavLink><br/>
                    <NavLink to="/ComponentLifecycle"  className="button" activeclassname="true"> Component Lifecycle  </NavLink><br/>  
                    <NavLink to="/UserSignIn"  className="button" activeclassname="true"> UserSignIn </NavLink>
                </div>
            </Router>
            
            
        )
    }
}