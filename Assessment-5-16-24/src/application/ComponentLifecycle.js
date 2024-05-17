import React, {Component} from "react"

export default class ComponentLifecycle extends Component {
    //1. Creation lifecycle- constructor,render,componentDidMount
    constructor(props) {
        super(props);
        this.state = { city: "ABC" ,
            stateName: "State1"
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({city: "XYZ"})
                }, 1000);
    }

    /*static getDerivedStateFromProps(props, state) {
        return {city: props.cityName };
    }*/

    shouldComponentUpdate() {
        return true;
    }

    changeCity = ()=> {
        this.setState({city: "Changed city"})
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("text1").innerHTML = "Before the update, city was:  " + prevState.city;
    }

    componentDidUpdate() {
        document.getElementById("text2").innerHTML = "Updated city is: " + this.state.city;
    }

    //Unmounting
    componentWillUnmount() {
        alert("The component named ComponentLifecycle is about to be unmounted.");
    }

    updateName = (event) => {
        this.setState({
            city : this.state.stateName
        })
        
        this.state.city = this.state.stateName
        this.forceUpdate();

        event.preventDefault()
    }
        
    render() {
        return(<div>
                {this.state.city}
                <button type="button" onClick={this.changeCity}>Change City</button>
                <div id="text1"></div>
                <div id="text2"></div>
                <button className={"form-control btn btn-primary col-md-1"} 
                            onClick={this.updateName}>Update City to State</button>
            </div>);
    }

}