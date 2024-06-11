import React, { Component, PureComponent } from "react";

export default class Home extends Component {
    constructor(props){

        super(props)

        this.state = {
            age : 30,
            userName : props.parentName,
            refAddress : "Address test",
            refAge : "age"
        }

        this.incrementAgeLoop = null;
        this.incrementAgeVal = 17;
        this.incrementAge();

        this.address = React.createRef() 
        this.age = React.createRef()
    }
    incrementAge = ()=>{
    }

    componentWillUnmount(){
        console.log("componentWillUnmount - is called")
    }
    onTextChange = (evt)=>{
        let element = evt.target
        let value = element.value;

        let classList = element.classList

        if (classList.contains("userName")) {
            this.setState({
                userName : value
            })
        } else {
            let newVal = value < 110 ? value : 0

            this.setState({
                age : newVal
            })
        }
        
        console.log(value)
        
        this.props.updateNameInParent(value)

        evt.preventDefault()
    }

    updateName = (evt)=>{
        console.log("Updating the nameto age!!")

        this.setState({
            age : this.state.userName
        })

        evt.preventDefault()
    }

    shouldComponentUpdate(nextPops, nextState){
        console.log("nextPops ", nextPops)
        console.log("nextState ", nextState)

        if (this.state.age == nextState.userName ) {
            return false
        } else {
            return true
        }
    }

    getSnapshotBeforeUpdate(prevState, prevProps){
        console.log("getSnapshotBeforeUpdate");
        console.log("prevState", prevState);
        console.log("prevProps", prevProps);
        return {
            prevState,
            prevProps
        }
    }

    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate");
        console.log("prevState",prevState);
        console.log("prevProps", prevProps);
    }

    formSubmit = (evt)=>{
        this.address.current.focus()
        let newAdd = this.address.current.value
        let newAge = this.age.current.value

        this.setState({
            refAge : newAge,
            refAddress : newAdd
        })

        evt.preventDefault()
    }

    render(){
        console.log("render method called")
        return(
            <div className={"loadimage form"} >
                <br/>
                <br/>
                <h1>{this.state.title}</h1>
                <b className="feature">{"Product Feature's :"}</b>
                <ul>                     
                    <li>Sign up new users</li>
                    <li>Login existing users.</li>                
                    <li>Allow user's to add to cart.</li>
                    <li>Save the user's cart.</li>
                    <li>Checkout and pay for items.</li>
                    <li>Allow users to cancel the order.</li>
                    <li>Allow users to reorder the cart.</li>
                    <li>Add products/items to create product collection.</li>
                    <li>Allow users to give ratings to each product.</li>
                    <li>Have notifications on top right with logout.</li>
                </ul>
            </div>
        )
    }

}
