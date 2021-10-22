import React , {useState} from 'react';
import {useHistory} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"; 
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import './signup.css';
const Signup = () => {
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [age , setAge] = useState('');
    const [img , setImg] = useState('');
    const [email , setEmail] = useState('');
    const [country , setCountry] = useState('');
    const [passwordd , setPasswordd] = useState('');

    const history = useHistory();
    //Messgae error 

    
    // const [fieldfristName , setFieldfristName] = useState('');
    // const [fieldlastName , setFieldlastName] = useState('');
    // const [fieldage , setFieldage] = useState('');
    // const [fieldimg , setFieldimg] = useState('');
    // const [fieldemail , setFieldemail] = useState('');
    // const [fieldcountry , setFieldcountry] = useState('');
    // const [fieldpassword , setFieldpassword] = useState('');

    const insertNewUser =(e)=>{
        e.preventDefault();
        const theUsers = {
            firstName,
            lastName,
            age,
            img,
            email,
            country,
            passwordd
        }
        axios.post('http://localhost:5000/signup' , theUsers).then((result)=>{
            history.push('/login');
        }).catch((err)=>{
            console.log(err);
        })
        
    }




    // const responseFacebook = async(response) => {
    //     if (response.status == "unknown") {
    //       return;
    //     }
    //     setData(response);
    //     if (!response.picture.data.url) {
    //       return;
    //     } else {
    //       console.log("response" ,response)
    //     let Facebookimage = response.picture.data.url //fb img
    //     // let FacebookName = response.name.split(" ").toString().replace(",", "") // firstnamelastname
    //     let Fname = response.name.split(" ")
    //     let FacebookfName = Fname[0]
    //     let FacebooklName = Fname[1]
    //     let Facebookmail = response.email
    //     let FacebookPassword = Math.random().toString(36).slice(-8);
    //     let firstName, lastName, age, img, email, passwordd, country;
    //     firstName=FacebookfName
    //     lastName=FacebooklName
    //     img=Facebookimage
    //     age=18
    //     email=Facebookmail
    //     passwordd=FacebookPassword
    //     country="temporaycountry"
    //     const theUser = {
    //       firstName,
    //       lastName,
    //       age,
    //       img,
    //       email,
    //       passwordd,
    //       country
    //   }
    //     axios.post('http://localhost:5000/signup' , theUser).then((result)=>{
    //       setMessage("Check your email for your password")
    //     }).catch((error)=>{
    
    //        setMessage("Duplicate Email Found")
    //     })
    //     // await  dispatch(setIsLoggedIn(true));
    //     // await  dispatch(setToken(response.accessToken));
    //     // await  dispatch(setUserAvatar(response.picture.data.url))
    //     // await  localStorage.setItem("token", response.accessToken);
    //     // await  localStorage.setItem("CurrentUserId",response.userID)
    //     // await  setPicture(response.picture.data.url);
    //     }
    //     if (response.accessToken) {
          
          
    //     } else {
          
    //     }
    //    history.push("/login")
    //   }; //end facebookstuff
    
    //   FB.logout(function(response) {
    //     // user is now logged out
    //   });
















    return (
        <>
        <div className="Main-SignUp">
            <div className="form-signup">
            <h3 className="title-form">Sign Up </h3>
            <hr></hr>
            <Form onSubmit={insertNewUser}>

<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="First Name"  onChange={(e)=>{setFirstName(e.target.value)}}/>
</Form.Group>


<Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="text" placeholder="E-mail" onChange={(e)=>{setEmail(e.target.value)}}/>
</Form.Group>


<Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="text" placeholder="Country" onChange={(e)=>{setCountry(e.target.value)}}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPasswordd(e.target.value)}}/>
</Form.Group>


<Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="confrim Password"/>
</Form.Group>

<button variant="primary" class="signup-btn"type="submit">
   Next
</button>
</Form>
                </div>
        </div>
        
        </>
    )
}

export default Signup