import React , { useState, useEffect}from 'react'
import './ShowAllfundreiser.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';
import User from '../getAllUsers/Users';
import axios from 'axios';
import { Button } from 'bootstrap';
import { reject } from 'bcrypt/promises';

const ShowAllfundreiser = () =>{
    const [getfundraiser, setGetfundraiser] = useState([]);
    
    useEffect(() => {
        axios.get(`http://localhost:5000/fundraiser/admin/dashbord/get/getallfundreiser`).then((result) => {
            setGetfundraiser(result.data.allData);
            return;
        }).catch((error) => {
            throw error;
        })
        
      },[]);

      const getallpost = () =>{
        axios.get(`http://localhost:5000/fundraiser/admin/dashbord/get/getallfundreiser`).then((result) => {
            setGetfundraiser(result.data.allData);
            return;
        }).catch((error) => {
            throw error;
        })
      }

    const Accsept = (id)=>{
        axios.put(`http://localhost:5000/admin/accept/${id}`).then((result) => {
            getallpost();
        }).catch((err) => {
            throw err;
            
        })
    }

    const reject =(id)=>{
        axios.put(`
        http://localhost:5000/admin/rejected/${id}`).then((result) => {
            getallpost();
        }).catch((err) => {
            throw err;
            
        })
    }

    const pending = (id)=>{
        axios.put(`
        http://localhost:5000/admin/batataa/batata/pending/${id}`).then((result) => {
            getallpost();
        }).catch((err) => {
            throw err;
            
        })

    }

    const ChangeFundraiserType = (id , typepost)=>{
            if(typepost === 0){
                Accsept(id);
            }else if(typepost === 1){
                reject(id);
            }else{
                pending(id);
            }
    }


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
                            <th>update fundraiser</th>
                            <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {getfundraiser&&getfundraiser.map((post ,index)=>{
                                return(
                                    <>
                                    <tr key={index}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>Empty</td>
                                    <td>{ post.is_deleted === 0 ? <button className='pending' onClick={()=>{ChangeFundraiserType(post.id , 0)}}>in process</button> : post.is_deleted === 1 ? <button className='approved' onClick={()=>{ChangeFundraiserType(post.id ,1 )}}>approved</button> : post.is_deleted === 2 ? <button className='deleted' onClick={()=>{ChangeFundraiserType(post.id , 2)}}>deleted</button> : console.log("UnKnown")} </td>
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
