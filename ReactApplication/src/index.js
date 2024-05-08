console.log("First file in React Application!!!")
import React from "react";
import * as ReactDOM from "react-dom/client";

import ApplicationComponent from "./app/app";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ApplicationComponent/>
)