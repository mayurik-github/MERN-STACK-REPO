import React from "react";

let SuccessChild = (props) => {
    return(
        <>
            <h4>Success Child Component</h4>
            <h5>User name from success: {props.name}</h5>
            <h5>Address from success: {props.address}</h5>
            <h5>{props.successStoryComponent}</h5>
            {/*<h5>Display success story from child: {props.successStory}</h5>*/}
        </>
    )
}

export default SuccessChild;
