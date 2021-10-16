import React , { useState , useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import './Count.css';
import { AiFillEye } from 'react-icons/ai';
const Count = ()=> {
    const [fundraiser, setFundraiser] = useState();
    const [user, setUser] = useState();
    
    
    useEffect(() => {
        axios.get(`http://localhost:5000/fundraiser`).then((result) => {
         console.log(result.data.result.length);
        }).catch((err) => {
            console.log(err);
        },)

        axios.get(`http://localhost:5000/admin/users`).then((result) => {
            console.log(result.data.result.length);
           }).catch((err) => {
               console.log(err);
           },)



      },[]);
    return (
        <div className="container">
            <div className="show-items text-center">
                <div className="row">
                    
                    <div class='col-lg-5'>
                          <AiFillEye/>
                    </div>

                    <div className="col-lg-5">
                        ssss
                    </div>
                    
                       </div>

            </div>
        </div>
    )
}

export default Count
