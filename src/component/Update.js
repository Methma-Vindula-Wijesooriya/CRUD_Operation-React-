import React, {useState,useEffect} from 'react';
import {Checkbox} from 'semantic-ui-react';
import axios from 'axios';
import './Style.css';
import {Link} from 'react-router-dom';

const Update = () => {
    const[firstName, setFirstName] = useState ('');
    const[lastName , setLastName] = useState ('');
    const[checkbox, setCheckbox] = useState ('true');
    const[id, setID] = useState(null);

useEffect(() => {
    setID(localStorage.getItem('ID'));
    setFirstName(localStorage.getItem('First Name'));
    setLastName(localStorage.getItem('Last Name'));
    setCheckbox(localStorage.getItem('Checkbox Value'))
}, []);

const updateAPIData = (e) => {
    e.preventDefault();
    axios.put(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`, {
        firstName,
         lastName,
         checkbox
	})
}

    return (
        <div className="App">
            <form className="form">
                <p>
                    <h1>React CRUD Operation</h1>
                </p>

                <p>
                <lable>First Name:</lable>
                <input value={firstName} onChange={(e) => {setFirstName(e.target.value)}}></input>
                </p>
    
                <p>
                <lable>Last Name:</lable>
                <input value={lastName}  onChange={(f) => {setLastName(f.target.value)}}></input>
                </p>
    
                <p className="checkbox">
                    <Checkbox value={checkbox} onClick={(h) => {setCheckbox(!checkbox)}}/>
                    <lable> I agree to the Terms and Conditions. </lable>
                </p>
    
                <p>
                <button type="submit" onClick={updateAPIData}>Update</button>
                </p>
            </form>
            <Link to="/">Home</Link>
        </div>
    )
}
export default Update;