import React,{Suspense} from "react";
import { Switch, Route, Link } from "react-router-dom"
import {useStore} from "../../store";

import Routes from "../../routes/admin";
import Loading from "../Loading";
console.log(Routes);

const Admin = () => {
    const {store, dispatch } = useStore();
    console.log(store);

    return <div className="col-lg-6 wrapper">
        <nav className="header">
            <ul className="row">
                <li className="col-md-3 col-sm-3"><Link to="/">Admin Home</Link></li>
                <li className="col-md-3 col-sm-3"><Link to="/admin/implement">Implement Task</Link></li>
                <li className="col-md-3 col-sm-3"><Link to="/admin/examine">Wait Examine</Link></li>
                <li className="col-md-3 col-sm-3"><Link to="/admin/completed">Completed task</Link></li>
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
}

export default Admin;