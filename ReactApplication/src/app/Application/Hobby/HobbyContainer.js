import {connect} from "react-redux";
import HobbyComponent from "./HobbyComponent.jsx";
import { AddHobbyToStore, SaveHobbyToDB, GetHobbiesFromDB } from "../../../state/Hobby/hobbyAction.js";

let mapStateToProps = (store)=>{
    return {
        hobby:store.hobbyReducer.hobby
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        updateHobby : (hobby)=>{
            alert("Inside hobby container hobby"+ hobby)
            dispatch(SaveHobbyToDB(hobby))
        },
        getHobbies : ()=>{
            dispatch(GetHobbiesFromDB())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HobbyComponent)