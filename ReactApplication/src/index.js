console.log("First file in React Application!!!")
import React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import ApplicationComponent from "./app/appComponent";
import store from "./state/store";;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <ApplicationComponent/>
    </Provider>
)