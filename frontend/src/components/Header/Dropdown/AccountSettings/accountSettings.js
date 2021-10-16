import React,{useState ,useEffect} from "react";
import './accountSettings.css';

import axios from "axios";

const AccountSettings=()=>{
    console.log("we entered account settings page")
    let tokenSave = localStorage.getItem("token");
    let userIdSave = localStorage.getItem("CurrentUserId")

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [img, setImage] = useState('');
    const [country, setCountry] = useState('');
    // const [gender, setGender] = useState('');

    useEffect(()=>{
        axios.get(`http://localhost:5000/search/GetUserById/${userIdSave}`, {
            headers: {
              Authorization: `Bearer ${tokenSave}`,
            }})
        .then(result=>{
            // console.log("result here",result)
            // console.log("result.data here",result.data)
            // console.log("result.data here",result.data.result[0].firstName)
            setFirstName(result.data.result[0].firstName)
            setLastName(result.data.result[0].lastName)
            setAge(result.data.result[0].age)
            setImage(result.data.result[0].img)
            setCountry(result.data.result[0].country)
           })
        .catch(err=>console.log(err))
    },[])

    const onUpdate=async ()=>{
      
        try {
          await axios.put(`http://localhost:5000/search/AccountSettings/update/${userIdSave}`,{
            firstName:firstName,  
            lastName:lastName,
            age:age,
            img: img,
            country:country
          }, {
            headers: {
              Authorization: `Bearer ${tokenSave}`,
            }}
          ).then(result=>{console.log("after update",result.data)})
        } catch (error) {
          console.log(error);
        }
      }
      return (
          <>
          <h1>account settings</h1>
        <div>
        <span>FirstName</span>
        <input type="text" placeholder={firstName} className="new_name"  onChange={(e)=>setFirstName(e.target.value)}  /><br/><br/>

        <span>LastName</span>
        <input type="text" placeholder={lastName} className="new_name"  onChange={(e)=>setLastName(e.target.value)}  /><br/><br/>

        <span>Age</span>
        <input type="text" placeholder={age} className="new_pass" onChange={(e)=>setAge(e.target.value)} /><br/><br/>

        <span>Image</span>
        <input type="text" placeholder={img} className="new_pass" onChange={(e)=>setImage(e.target.value)} /><br/><br/>

        <span>Country</span>
        <input type="text" placeholder={country} className="new_pass" onChange={(e)=>setCountry(e.target.value)} /><br/><br/>
        
        <button onClick={()=>{onUpdate()}} className="change_info">Update</button>
        
        </div>
        </>
    )
}  

export default AccountSettings;
