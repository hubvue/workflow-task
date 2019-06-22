import React,{useState} from "react";
import "./index.css";
import Form  from "../Form";
const Home = () => {
    const [show, setShow] = useState(false);
    const showRelease = () => {
        setShow(!show);
    }
    console.log(show);
    const style = {
        "display": show? "block" : "none",
    }
    return <div className="admin__home">
        <div className="home__task_release" style={style}>
            <div className="release__wrapper">
                <Form setShow={setShow}/>
            </div>
        </div>
        <div className="btn__container">
            <button className=" btn btn-info" onClick={showRelease}>发布任务</button>
        </div>
    </div>
}

export default Home;