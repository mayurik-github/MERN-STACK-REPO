import React, { Component } from "react";
import {connect} from "react-redux";
import { AddUserToStore, SaveUserToDB} from "../../../state/User/userAction"
import UserComponent from "./UserComponent.jsx";
//import AdminComponent from "./AdminComponent.jsx";

//let globalCondition = "Admin login"

let mapStateToProps = (store) => {

        return {
            user : store.userReducer.User
        }
    }
    
    let mapDispatchToProps = (dispatch) => {
        return {
            addUser : (user) => {
                dispatch(AddUserToStore(user))
            },
        loginUser : (user) => {
                dispatch(SaveUserToDB(user))
        }
        }
    }
    

   // export default connect(mapStateToProps, mapDispatchToProps)(globalCondition ? UserComponent : AdminComponent)


     export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)