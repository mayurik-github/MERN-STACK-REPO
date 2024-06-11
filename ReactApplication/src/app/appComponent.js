import React, {Component} from "react";
import "./app.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Common/HeaderComponent";
import Footer from "./Common/FooterComponent";
import NotFound from "./Common/NotFoundComponent";
import About from "./Common/AboutComponent"
import UserComponent from "./Application/User/UserContainer";
import Home from "./Common/HomeComponent";
import UserHook from "./Application/User/UserHookComponent"
import Product from "./Application/Product/AddProduct"
import StudentComponent from "./Application/Student/StudentContainer";
import StudentHook from "./Application/Student/StudentHookComponent";
import HobbyComponent from "./Application/Hobby/HobbyContainer"
import GetProduct from "./Application/Product/GetProduct"
import Cart from "./Application/Cart/CartComponent"
import Logout from "./Common/LogoutComponent";

export default class ApplicationComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            name : ""
        }
    }

    updateName = (value)=>{
        this.setState({
            name : value
        })
    }
    //render() {
        //let name = "Hello!!!"
        //return(
            //<div className="topdiv">
                //*<h4>This is main React app Component</h4>
                //<b id="name-element">{name}</b>
               // <Header />
                //<Home parentName={this.state.name}/>
                //<About />
                //<FormComponent/>
                //<Footer/>
            //</div>
        //)
    //}
    render(){
        return(
            <Router>
                <div className="topdiv">
                <Header userName={this.state.name}/>
                <Routes>
                    <Route path="/" element={<Home  parentName1={this.state.name} 
                            updateNameInParent={this.updateName} />}/>
                    <Route path="home" element={<Home  parentName1={this.state.name}
                            updateNameInParent={this.updateName} />}/>
                    <Route path="user" element={<UserComponent />}/>
                     {/*<Route path="user" element={<UserHook />}/>*/}
                    <Route path="student" element={<StudentComponent />}/>
                    <Route path="product" element={<Product />}/>
                    <Route path="productList" element={<GetProduct />}/>
                    <Route path="cart" element={<Cart />}/>
                    {/*<Route path="hobby" element={<HobbyComponent />}/>}*/}
                    <Route path="about" element={<About />}/>
                    <Route path="about/:id" element={<About />} />
                    <Route path="*" element={<NotFound />}/>
                    <Route path= "/logout" element = {<Logout />}/>                    
                </Routes>
                <Footer/> 
                </div>
            </Router>
        )
    }

}