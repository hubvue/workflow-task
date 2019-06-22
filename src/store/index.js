import React, {useReducer, createContext, useContext} from "react";
import initialState from "./data";
const context = createContext(initialState);

const reducer = (state, action) => {
    switch(action.type){
        case "RECEIVE":
            let task = state.receive.find((task, idx) => idx === action.id);
            task.state = "执行中"
            return {
                ...state,
                userImplement: state.userImplement.concat([task]),
                receive: state.receive.filter((task, idx) => idx !== action.id),
                implement: state.implement.filter((task, idx) => idx !== action.id)
            } 
        case "RELEASE_TASK":
            return Object.assign(state, {
                 implement: state.implement.concat([action.value]),
                 receive: state.receive.concat([action.value]),
            });
        case "IMPLEMENT_TASK": 
             let taskImplement = state.userImplement.find((task, idx) => idx === action.id);
             taskImplement.state = "待审核";
            return {
                ...state,
                adminExamine: state.adminExamine.concat([taskImplement]),
                userImplement: state.userImplement.map((task, idx) => {
                     if(idx === action.id){
                         task.state = "待审核";
                     }
                     return task;
                })
            }
        case "EXAMINED":
            let taskExamined = state.adminExamine.find((task, idx) => idx === action.id);
            taskExamined.state = "已完成";
            return {
                ...state,
                adminExamine: state.adminExamine.filter((task, idx) => idx !== action.id),
                completed: state.completed.concat([taskExamined]),
                userImplement: state.userImplement.filter((task, idx) => idx !== action.id)
            }
        default:
            return state;
    }
}


const Provider = ({children}) => {
    let [store, dispatch] = useReducer(reducer, initialState);
    return (
        <context.Provider value = {{store,dispatch} } >
            {children}
        </context.Provider>
    )
}

const useStore = () => {
    const store = useContext(context);
    return store;
};

export {
    Provider,
    useStore,
}