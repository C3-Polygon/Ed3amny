import React , { useState, useEffect}from 'react'
import './ShowAllfundreiser.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';
import User from '../getAllUsers/Users';

const ShowAllfundreiser = () =>{
    const [getusers, setGetusers] = useState();

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
                            <tr>
                        
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            </tr>
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
