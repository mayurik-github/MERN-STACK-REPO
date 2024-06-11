import React from "react"

let Logout = () => {
    localStorage.clear();
    window.location.href = '/';
    return(<></>)
}

export default Logout