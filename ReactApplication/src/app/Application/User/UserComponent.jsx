import React, { Component } from "react";
//import {connect} from "react-redux";
//import { AddUserToStore} from "../../../state/User/userAction"
import HobbiesList from "../../../state/Hobby/hobbyList";

export default class UserComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            userName : props.user.userName, // we need to read from store using props through container
            password : props.user.password,
            street : props.user.street,
            mobile : props.user.mobile
        }
    }

    onTextChange = (evt)=>{
        let target = evt.target;
        let classList = target.classList;//reading the class name of html when change event happens
        let value = target.value;
    
        if(classList.contains("username")){
            this.setState({ userName : value })
        }else if (classList.contains("pass")) {
            this.setState({ password : value })
        } else if (classList.contains("street")) {
            this.setState({ street : value })
        } else {
            this.setState({ mobile : value })
        }    
        evt.preventDefault();
    }

    loginUser = (evt)=>{        
        let newUser = this.state;
        alert("Logged Innn -"+JSON.stringify(newUser))
        
        //this.props.addUser(newUser);

        this.props.loginUser(newUser) 
        evt.preventDefault();
    }

    getHobbies = (event)=>{
        this.props.getHobbies();
        event.preventDefault();
    }
    
    render() {
        return(
            <>
                <h1>User Login Page</h1>
                <section className={"componentClass"}>
                    <div className="form col-md-8">
                        <div className="col-md-12">
                            <b>User Name</b>
                            <input type="text" className="form-control col-md-6 username" 
                                    value={this.state.userName} 
                                placeholder="User Name" onChange={this.onTextChange} maxLength={40}/>
            
                            </div>
                            <div className="col-md-12">
                                    <b>Password</b>
                                    <input type="password" className="form-control col-md-6 pass" value={this.state.password} 
                                    placeholder="Password" onChange={this.onTextChange} maxLength={40}/>
                            </div>
                            <div className="col-md-12">
                            <b>Street </b>
                                <input type="text" className="form-control col-md-6 street" value={this.state.street} 
                                        placeholder="Street Name" onChange={this.onTextChange} />
                            </div>
                        
                            <div className="col-md-12">
                                <b>Mobile </b>
                                <input type="number" className="form-control col-md-6 mobile" value={this.state.mobile} 
                                placeholder="Mobile" maxLength="11"
                                onChange={this.onTextChange} />
                            </div>
                            <div className="col-md-12">
                                <b>Hobby </b>
                                <HobbiesList />
                            </div>
                            <input type="button" className={"btn btn-primary col-md-2 saveUser"} 
                                    value={"SignIn-Up"} 
                                    onClick={this.loginUser}/>
                                    
                        </div>
                </section>
            </>
        )
    }
}

// let mapStateToProps = (store) => {
//     return {
//         user : store.userReducer.User
//     }
// }

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addUser : (user) => {
//             dispatch(AddUserToStore(user))
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)