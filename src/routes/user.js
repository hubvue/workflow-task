import React, {lazy} from "react";

const Receive = lazy(() => import('../components/ReceiveTask'));
const Completed = lazy(() => import("../components/CompletedTask"));
const Implement = lazy(() => import("../components/UserImplement"));

const Routes = [ {
    path: "/user/receive",
    component: Receive,
}, {
    path: "/user/completed",
    component: Completed,
},{
    path: "/user/implement",
    component: Implement,
}];

export default Routes;