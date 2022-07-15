import React, { useState } from "react";
import {Checkbox} from 'semantic-ui-react'
import './Create.css';
const Create = (props) => {

const [firstname, setFirstName] = useState('');
const [lastname, setLastName] = useState('');
const [checkbox , setCheckbox] =useState ('false');
return (
    <div className="App">
        <form className="form">
            <p>
                <h1>React CRUD Operation</h1>
            </p>
            <p>
            <lable>First Name:</lable>
            <input onChange={(e) => {setFirstName(e.target.value)}}></input>
            </p>

            <p>
            <lable>Last Name:</lable>
            <input onChange={(f) => {setLastName(f.target.value)}}></input>
            </p>
            <p className="checkbox">
                <Checkbox/>
                <lable>I agree to the Terms and Conditions</lable>
            </p>
            <p>
            <button type="submit">Submit</button>
            </p>
        </form>
    </div>
)
};

export default Create;