import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

let Header = (props) => {

    const user = useSelector((store) => store.userReducer.User)
    const userName = user && user.userName ? user.userName : props.userName
    console.log(user)
    return(
        <>
           
            <div>
            
                {/*<NavLink to="/student"  className="button" activeclassname="true"> Students </NavLink>*/}
                
                {userName ?
                <nav className="link-container"><h3>Hi {userName} , Welcome to Shopping Cart sponsored by our team.</h3>
                     <NavLink to="/home"  className="button" activeclassname="true"> Home </NavLink>
                    <NavLink to="/user"  className="button" activeclassname="true"> Login </NavLink>
                    <NavLink to="/about"  className="button" activeclassname="true"> About </NavLink>
                    
                    <NavLink to="/cart"  className="button" activeclassname="true"> Cart </NavLink>
                    {userName === 'admin' ?
                    <NavLink to="/product"  className="button" activeclassname="true"> Add Product </NavLink>
                    :null}
                    <NavLink to="/productList"  className="button" activeclassname="true"> List Products </NavLink>
                    <NavLink to = "/logout" className= "button" activeclassname = "true">Logout</NavLink>
                </nav> : <nav className="link-container"><h3>Hi {userName} , Welcome to Shopping Cart sponsored by our team.</h3><NavLink to="/home"  className="button" activeclassname="true"> Home </NavLink>
                <NavLink to="/user"  className="button" activeclassname="true"> Login </NavLink>
                <NavLink to="/about"  className="button" activeclassname="true"> About </NavLink>
                <NavLink to = "/logout" className= "button" activeclassname = "true">Logout</NavLink>
                </nav>
                }
                {/*<NavLink to="/hobby"  className="button" activeclassname="true"> Hobby Page </NavLink>*/}
               
                {/*<NavLink to="/about/2500"  className="button" activeclassname="true"> About with Param</NavLink>*/}
                
            </div>
            <hr/>
        </>
    )
}

export default Header;
