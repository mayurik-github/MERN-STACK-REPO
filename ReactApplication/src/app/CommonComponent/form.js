import React, {Component} from "react";

export default class FormComponent extends Component {

    render() {
        let name = "Hello!!!"
        return(
            <div className="topdiv">
                <form>
                    <div className="col-md-12">
                        <label className="col-md-4">User Name:</label>
                        <input className="col-md-6" type="text" maxLength={15} placeholder="Please type name here.." />
                        <hr/>
                        <label className="col-md-4">Email:</label>
                        <input className="col-md-6" type="email" maxLength={15} placeholder="Please type email here.." />
                        <hr/>
                        <label className="col-md-4">Phone#:</label>
                        <input className="col-md-6" type="tel" maxLength={10} placeholder="Please type phone# here.." />
                        <hr/>
                        <label className="col-md-4">Date#:</label>
                        <input className="col-md-6" type="date" placeholder="Please select date here.." />
                        <hr/>
                        <label className="col-md-4">Gender#:</label>
                        <input className="col-md-6" type="radio" name="gender" value="ABC"/>
                        <hr/>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }

}