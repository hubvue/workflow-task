import React, {lazy} from "react";

const Home = lazy(() => import("../components/Home"));
const Implement = lazy(() => import("../components/Implement"));
const Completed = lazy(() => import("../components/CompletedTask"));
const Examine = lazy(() => import("../components/ExamineTask"));

const Routes = [
    {
        path: "/",
        component: Home,
        exact: true,
    },{
        path:"/admin/implement",
        component: Implement,
    },{
        path: "/admin/completed",
        component: Completed,
    },{
        path: "/admin/examine",
        component: Examine,
    }
];

export default Routes;