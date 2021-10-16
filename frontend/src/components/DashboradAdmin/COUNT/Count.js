import React , { useState , useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import './Count.css';
import { AiFillEye  ,AiTwotoneSchedule ,AiOutlineUsergroupAdd} from 'react-icons/ai';
const Count = ()=> {
    const [fundraiser, setFundraiser] = useState();
    const [user, setUser] = useState();
    
    
    useEffect(() => {
        axios.get(`http://localhost:5000/fundraiser/admin/dashbord/get/getallfundreiser`).then((result) => {
            setFundraiser(result.data.allData.length);
        }).catch((err) => {
            console.log(err);
        },)

        axios.get(`http://localhost:5000/admin/users`).then((result) => {
            setUser(result.data.result.length);
           }).catch((err) => {
               console.log(err);
           },)



      },[]);
    return (
        <div className="container">
            <div className="show-items text-center">
                <div className="row">
                    
                    <div class='col-lg-4'>
                          {/* <AiFillEye /> */}
                          <div className='child-item'>
                             <div>
                             <h2>{user}</h2>
                             <p>Total Users</p>
                             </div>
                             <AiOutlineUsergroupAdd className='icon-show'/>
                             
                          </div>
                        
                    </div>

                    <div className="col-lg-4">
                    <div className='child-item'>
                             <div>
                             <h2>{fundraiser}</h2>
                             <p>All fundraisers</p>
                             </div>
                             <AiTwotoneSchedule className='icon-show' /> 
                          </div>
                    </div>

                    
                    <div className="col-lg-4">
                    <div className='child-item'>
                             <div>
                             <h2>{user}</h2>
                             <p>Daily</p>
                             </div>
                             <AiFillEye className='icon-show'/> 
                          </div>
                    </div>
                    
                       </div>

            </div>
        </div>
    )
}

export default Count
