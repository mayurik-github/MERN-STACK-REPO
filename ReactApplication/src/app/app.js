import React, {Component} from "react";
import "./app.css"
import FormComponent from "./CommonComponent/form";
import Header from "./CommonComponent/HeaderComponent";
import About from "./CommonComponent/AboutComponent";

export default class ApplicationComponent extends Component {

    render() {
        let name = "Hello!!!"
        return(
            <div className="topdiv">
                {/*<h4>This is main React app Component</h4>
                <b id="name-element">{name}</b>*/}
                <Header />
                <Home parentName={this.state.name}/>
                <About />
                <FormComponent/>
                <Footer/>
            </div>
        )
    }

}