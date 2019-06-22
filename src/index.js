import React from "react";
import { render } from "react-dom";
import { BrowserRouter,HashRouter} from "react-router-dom";
import {Provider} from "./store";
import App from "./components/App";

render(
    <HashRouter>
        <Provider>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById("root")
)