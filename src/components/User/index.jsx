import React, {Suspense} from "react";
import { Switch, Route,Link } from "react-router-dom"
import {useStore} from "../../store";

import Routes from "../../routes/user";
import Loading from "../Loading";
const User = () => {

    return (
        <div className="col-lg-6 wrapper">
            <nav className="header">
                <ul className="row">
                    <li className="col-md-4 col-sm-4 col-4"><Link to="/user/receive">Wait Receive</Link></li>
                    <li className="col-md-4 col-sm-4  col-4"><Link to="/user/implement">Implement Task</Link></li>
                    <li className="col-md-4 col-sm-4  col-4"><Link to="/user/completed">Completed Task</Link></li>
                </ul>
            </nav> 
            <div>
                <Suspense fallback={<Loading/>}>
                    {Routes.map(route => {
                        return <Route key={route.path}  {...route} />
                    })}
                </Suspense>
            </div>
        </div>
    )
}

export default User;