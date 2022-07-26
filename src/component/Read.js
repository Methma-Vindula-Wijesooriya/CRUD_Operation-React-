import React, { useEffect, useState } from 'react';
import './Style.css';
import axios from 'axios';
import {Table, TableBody, TableCell, TableHeader, TableRow } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const Read = () =>{
    const [APIData, setAPIData] = useState([]);

    useEffect(( ) => {
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const getData = () => {
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }

    const onDelete = (id) => {
        axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
        .then(() => {
            getData();
        })
    }

    const setData = (data) => {
        const {id,firstName,lastName,checkbox} = data;
        localStorage.setItem('ID',id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value',checkbox);
    }

    return(
    <div className="App">
        <Table className='readtable'>
            <TableHeader>
            <TableRow>
                    <TableCell><b>FirstName</b></TableCell>
                    <TableCell><b>LastName</b></TableCell>
                    <TableCell><b>Checked/Unchecked</b></TableCell>
                    <TableCell><b>Update</b></TableCell>
                    <TableCell><b>Delete</b></TableCell>
                </TableRow>
            </TableHeader>
            <TableBody>
            {APIData.map((data) => {
                return (
                    <Table.Row>
                        <Table.Cell>{data.firstName}</Table.Cell>
                        <Table.Cell>{data.lastName}</Table.Cell>
                        <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                        <TableCell><button onClick={() => setData(data)}>Update</button></TableCell>
                        <TableCell><button onClick={() => onDelete(data.id)}>Delete</button></TableCell>
                    </Table.Row>
                )})}
            </TableBody>
        </Table>
        <Link to="/">Home</Link>
    </div>
    )
};
export default Read;