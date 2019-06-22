import React from "react";


const Input = ({ name, value, changeValue, iscontent = false }) => {
    return (
        <div className="form-group">
            <label>{name}</label>
            {iscontent ?
                <textarea name="" id="" cols="61" rows="5" value={value} onChange={changeValue}></textarea>
                : <input type="text" className="form-control" value={value} onChange={changeValue} />}
        </div>)

}

export default Input;