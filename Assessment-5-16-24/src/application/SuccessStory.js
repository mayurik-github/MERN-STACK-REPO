import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Success from "./success";

export default class SuccessStory extends Component {
    constructor(props) {
        super(props)
    }
    generateValue = () => {
       this.props.successCallBack("Hello from Success Story.)")
    }
    render() {
        return(
            <div>
                <h5>Success story component.</h5>
                <button onClick={this.generateValue}>Send random value to Success</button>
            </div>
        )
    }
}
