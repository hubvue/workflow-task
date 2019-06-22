import React, { useState } from "react";
import { useStore } from "../../store/index";
const UserImplement = () => {
    const { store, dispatch } = useStore();
    const submitHandle = (id) => {
        return () => {
            dispatch({
                type: "IMPLEMENT_TASK",
                id,
            })
        }
    }
    return (
        <div className="task__wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Content</th>
                        <th scope="col">State</th>
                        <th scope="col">Active</th>
                    </tr>
                </thead>
                <tbody>
                    {store.userImplement.map((task, idx) => (
                        <tr key={idx}>
                            <th scope="row">{idx}</th>
                            <td>{task.name}</td>
                            <td>{task.content}</td>
                            <td>{task.state}</td>
                            {task.state === "执行中" ? <td><button className="btn btn-outline-dark" onClick={submitHandle(idx)}>提交</button></td> : void 0}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserImplement;