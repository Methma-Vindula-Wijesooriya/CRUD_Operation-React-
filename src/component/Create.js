import React, { useState } from "react";
import {Checkbox} from 'semantic-ui-react';
import './Style.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Create = (props) => {

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [checkbox , setCheckbox] =useState ('true');

const postData = (e) => {
    e.preventDefault();
    axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
        firstName,
        lastName,
        checkbox
    })
}

return (
    <div className="App">
        <form className="form" >
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
            <Checkbox onClick = {(h) => {setCheckbox(!checkbox)}}/>
            <lable>I agree to the Terms and Conditions</lable>
            </p>

            <p>
            <button type="submit" onClick={postData} disabled={(checkbox ? true:false)||(firstName && lastName ?  false:true)}>Submit</button>
            </p>
        </form>
        <Link to="/">Home</Link>
    </div>
)
};
 
export default Create;