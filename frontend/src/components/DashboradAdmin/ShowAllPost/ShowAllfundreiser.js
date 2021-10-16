import React , { useState, useEffect}from 'react'
import './ShowAllfundreiser.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';
import User from '../getAllUsers/Users';
import axios from 'axios';
import { Button } from 'bootstrap';

const ShowAllfundreiser = () =>{
    const [getfundraiser, setGetfundraiser] = useState();
    
    useEffect(() => {
        axios.get(`http://localhost:5000/fundraiser/admin/dashbord/get/getallfundreiser`).then((result) => {
            setGetfundraiser(result.data.allData);
        }).catch((err) => {
            console.log(err);
        },)
      },[]);
    return (
        <>
        
        <div className="Main-view-users">
            <div className='row'>
                <div className='col-lg-9'>
                    <div className='Main-recent'>
                    <h5>Recent Fundraisers</h5>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th>#id</th>
                            <th>Fundraisers title </th>
                            <th>Email</th>
                            <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {getfundraiser&&getfundraiser.map((post)=>{
                                return(
                                    <>
                                    <tr>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.email}</td>
                                    <td>{ post.is_deleted === 0 ? <button className='pending'>in process</button> : post.is_deleted === 1 ? <button className='approved'>approved</button> : post.is_deleted === 2 ? <button className='deleted'>deleted</button> : console.log("UnKnown")} </td>
                                    </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </Table>
                    </div>
                </div>

                <div className='col-lg-3'>
                    <User/>
                </div>
            </div>
        </div>
        </>
    )
}

export default ShowAllfundreiser
