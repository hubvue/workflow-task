import React from "react";

import Admin from "./Admin";
import User from "./User";
import "./App.css";

const App = () => {
    return (
        <div className="container-fluid container-wrapper">
           <div className="row">
                <Admin />
                <User />
            </div>
        </div>
    )
}

export default App;