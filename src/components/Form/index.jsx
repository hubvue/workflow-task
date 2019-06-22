import React, {useState} from "react";
import {useStore} from "../../store";

import Input from "../Input";
import "./index.css";



const Form = ({setShow}) =>{
    const [name, setName] = useState("");
    const [content, setContent] = useState("");

    const {store, dispatch} = useStore();
    const changeName = (e) => {
        setName(e.target.value);
    }
    const changeContent = e => {
        setContent(e.target.value);
    }

    const submitTask = () => {
        dispatch({
            type: "RELEASE_TASK",
            value: {
                name,
                content,
                state: "待接受",
                message: "",
            }
        });
        setShow(false);
        setName("");
        setContent("");
    }

    return (
        <div className="form__container">
            <Input name="Task Name" value={name} changeValue={changeName}/>
            <Input name="Task Content" value={content} changeValue={changeContent} iscontent={true}/>
            <div className="release_btn">
                <button type="button" className="btn btn-primary" onClick={submitTask}>发布</button>
            </div>
        </div>
    )
}



export default Form;