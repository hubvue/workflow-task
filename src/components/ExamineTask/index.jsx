import React, { useState } from "react";
import { useStore } from "../../store/index";
const Examine = () => {
    const { store, dispatch } = useStore();
    const examineHandle = (id) => {
        return () => {
            dispatch({
                type: "EXAMINED",
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
                    </tr>
                </thead>
                <tbody>
                    {store.adminExamine.map((task, idx) => (
                        <tr key={idx}>
                            <th scope="row">{idx}</th>
                            <td>{task.name}</td>
                            <td>{task.content}</td>
                            <td>{task.state}</td>
                            <td><button className="btn btn-outline-dark" onClick={examineHandle(idx)}>提交</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Examine;