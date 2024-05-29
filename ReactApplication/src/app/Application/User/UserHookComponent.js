import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SaveUserToDB, SaveUserToDBUsingFetch } from "../../../state/User/userAction";

let UserHook = (props)=> {

    //subscribe and read from userReducer using useSlector
    let User = useSelector((store)=>store.userReducer.User)
    let [uName, setUserName] = useState(User.userName)
    let [pass, setPassword] = useState(User.password)
    let [street, setStreet] = useState(User.street)
    let [mobile, setPhone] = useState(User.mobile)

    let onTextChange = (evt)=> {
        let value = evt.target.value
        setUserName(value)
        evt.preventDefault()
    }

    let dispatchtoDB = useDispatch()

    let loginUser = (evt)=> {
        let newUser = {
            userName : uName,
            password : pass,
            street,
            mobile
        }

        //dispatchtoDB(SaveUserToDB(newUser))
        dispatchtoDB(SaveUserToDBUsingFetch(newUser))
        evt.preventDefault()
    }

    //below is useRef help
    //the reference implemenation
    let sessionName = useRef(null)
    let todaysTopic = useRef(null)

    useEffect(()=> {
        console.log("Re render happened")

        sessionName.current.value = User.userName
    }, [])
    
    let readFormData = (evt) => {
        alert(sessionName.current.value)
        evt.preventDefault()
    }
    

    return(
        <>
            <h1>User Login Page</h1>
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>User Name</b>
                        <input type="text" className="form-control col-md-6 username" 
                                value={uName} //state to update the userName
                            placeholder="User Name" onChange={onTextChange} maxLength={40}/>
                    </div>
                    <div className="col-md-12">
                            <b>Password</b>
                            <input type="password" className="form-control col-md-6 pass" 
                                value={pass} 
                            placeholder="Password" onChange={(evt)=>setPassword(evt.target.value)} maxLength={40}/>
                    </div>
                    <div className="col-md-12">
                            <b>Street </b>
                                <input type="text" className="form-control col-md-6 street" 
                                value={street} 
                            placeholder="Street Name" onChange={(evt)=>setStreet(evt.target.value)} />
                    </div>
                        
                    <div className="col-md-12">
                        <b>Mobile </b>
                        <input type="number" className="form-control col-md-6 mobile" 
                            value={mobile} placeholder="Mobile" maxLength={11}
                            onChange={(evt)=>setPhone(evt.target.value)} />
                    </div>
                    <input type="button" className={"btn btn-primary col-md-2 saveUser"} 
                                    value={"SignIn-Up"} 
                                    onClick={loginUser}/>
                </div>
            </section>

        {/* uncontrolled way by using ref keyword */}
            <form className={"form col-md-10 userHook"} onSubmit={readFormData}>                
                <label>
                    <b>User Name :</b>
                    <input type="text" className={"form-control col-md-12"} ref={sessionName}
                    placeholder="Please enter session name" maxLength={20} required/>
                </label>
                <br/>
                <label>
                        <b>Password :</b>
                        <input type="password" className={"form-control col-md-12"} ref={todaysTopic} 
                                placeholder="Please enter today's topic" maxLength={20} required/>
                    </label>
                    <br/>
                <input type="submit" className={"btn btn-primary"} value="Signin" />
            </form> 

        </>
    )
}

export default UserHook;
