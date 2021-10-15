import React , {useState} from 'react';
import {useHistory} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"; 
import Form from 'react-bootstrap/Form';
import axios from 'axios';
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
    return (
        <>
            <Form onSubmit={insertNewUser}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name </Form.Label>
            <Form.Control type="text" placeholder="First Name"  onChange={(e)=>{setFirstName(e.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" onChange={(e)=>{setLastName(e.target.value)}} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Age" onChange={(e)=>{setAge(e.target.value)}}/>
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" placeholder="Image" onChange={(e)=>{setImg(e.target.value)}} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="text" placeholder="E-mail" onChange={(e)=>{setEmail(e.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" placeholder="Country" onChange={(e)=>{setCountry(e.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" placeholder="Password" onChange={(e)=>{setPasswordd(e.target.value)}}/>
        </Form.Group>


        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>password confrim</Form.Label>
            <Form.Control type="email" placeholder="password confrim"/>
        </Form.Group> */}

        <button variant="primary" type="submit">
            Submit
        </button>
        <button onClick={()=> history.push("/login")}>login</button>
        <button onClick={()=> history.push("/")}>Home</button>
        </Form>
        
        </>
    )
}

export default Signup