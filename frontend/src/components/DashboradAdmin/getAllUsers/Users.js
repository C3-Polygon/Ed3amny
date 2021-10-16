import React , { useState, useEffect}from 'react'
import './Users.css';
import axios from 'axios';
const Users = () =>{
    const [users, setUsers] = useState();
    useEffect(() => {
        axios.get(`http://localhost:5000/admin/users`).then((result) => {
            setUsers(result.data.result);
           }).catch((err) => {
               console.log(err);
           },)
      },[]);
    return (
        <>
        <div className="Main-users">
            <h5>Recent Users</h5>
            {users&&users.map((user)=>{
                return(
                    <div className="show-all-users">
                        <img src={user.img}/>
                        <div>
                            <h6>{user.firstName}</h6>
                            <p>{user.country}</p>
                        </div>
                    </div>
                )
            })}

        </div>
        </>
    )
}

export default Users
