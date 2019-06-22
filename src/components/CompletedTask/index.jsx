import React, { useState } from "react";
import { useStore } from "../../store/index";
const Completed = () => {
    const { store, dispatch } = useStore();
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
                    {store.completed.map((task, idx) => (
                        <tr key={idx}>
                            <th scope="row">{idx}</th>
                            <td>{task.name}</td>
                            <td>{task.content}</td>
                            <td>{task.state}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Completed;