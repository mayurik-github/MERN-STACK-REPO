import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

let About = () => {
    let params = useParams(); 
    let param = params && params["id"] ? params["id"]: "No Params"; 

    let [userName, setUserName] = useState("User Test!") 
    let [userAge, setUserAge] = useState(20)

    let goToHome = useNavigate(); 

    let onGoToHomeClick = (evt)=>{
        setUserName("About user!!")

        evt.preventDefault();
    }

    return(
        <div className="about" >  
        <h2>We promise to support .... </h2>  
        <p className="about-content">If you’re looking for a job—a great job—we can help  
            you get in the door at some incredible companies.  
            Need to hire good people? We know thousands.  
            Let us introduce you. No matter where you are,  
            we can help you get where you want to go in your career.  
        </p>
        <p>id = {param}</p>
        <p>Sum of Params = {param + param}</p>
        <p>Multiple of Params = {param * param}</p>

        <button className={"form-control btn btn-primary col-md-1"} 
                onClick={onGoToHomeClick} 
                >Go To Home</button>

        <h4>{userName}</h4>
</div>
)
}

export default About;
