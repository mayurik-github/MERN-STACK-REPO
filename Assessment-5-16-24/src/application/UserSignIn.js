import React, { Component } from "react";

{/*//6. create UserSignIn component using uncontrolled way, should be class component}*/}
export default class UserSignIn extends Component {
    constructor(props) {
        super(props);
        this.userNameRef = React.createRef();
    }

    displayName = (evt) => {
        alert("User name is: " + this.userNameRef.current.value);
    }
    render() {
        return(
            <form onSubmit={this.displayName}>
                <input type="text" ref={this.userNameRef} />
                <button type="submit"> Submit </button>
            </form>
        )
    }
}