import React, {Component} from "react";
import "../dispenser.css";

export default class ATMDispenser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            amount: 0,
            result: []
        };
    }

    amountChange(amt) {
        var txtAmount = amt.target.value;
        this.setState({
            amount : txtAmount
        });
    }

    calculateDenominations(inputAmount) {
        const denominations = [2000, 500, 100, 50, 20, 10, 5, 2, 1];
        var amountsArray = [];

        denominations.map(d => {
            amountsArray.push(Math.floor(inputAmount/d));
            inputAmount = inputAmount % d;
        });

        this.setState({result: amountsArray});
    }

    render(){
        const results = this.state.result;
        return(<div className="atm">
                <h1>ATM Dispenser</h1>
                Enter an amount to withdraw:
                <input type="text" value={this.state.amount} onChange={val=>this.amountChange(val)} />
                <button onClick={()=>this.calculateDenominations(this.state.amount)}>Withdraw</button>
                <div>
                    <br />
                    <p>2000:- {results[0]} </p>
                    <p>500:- {results[1]} </p>
                    <p>100:- {results[2]} </p>
                    <p>50:- {results[3]} </p>
                    <p>20:- {results[4]} </p>
                    <p>10:- {results[5]} </p>
                    <p>5:- {results[6]} </p>
                    <p>2:- {results[7]} </p>
                    <p>1:- {results[8]} </p>
                </div>
            </div>
        );
    }
}
