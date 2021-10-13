import React , {useState , useHistory} from 'react';

import { useDispatch , useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import {setIsLoggedIn} from '../../../reducers/login/isLoggedIn';
const Signup = () => {
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [age , setAge] = useState('');
    const [img , setImg] = useState('');
    const [email , setEmail] = useState('');
    const [country , setCountry] = useState('');
    const [passwordd , setPasswordd] = useState('');

    const dispatch = useDispatch();  
    const state_1 = useSelector((state)=>{
        return {isLoggedIn: state.isLoggedIn.isLoggedIn};
    });
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
            console.log("result" , result);

            dispatch(setIsLoggedIn(true));
            localStorage.setItem("isLoggedIn", state_1.isLoggedIn);
        }).catch((err)=>{
            console.log(err);
        })
        
    }
    return (
        <>
            <Form onSubmit={insertNewUser}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Frsit Name </Form.Label>
            <Form.Control type="text" placeholder="Enter email"  onChange={(e)=>{setFirstName(e.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>lastName</Form.Label>
            <Form.Control type="text" placeholder="lastName" onChange={(e)=>{setLastName(e.target.value)}} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>age</Form.Label>
            <Form.Control type="number" placeholder="age" onChange={(e)=>{setAge(e.target.value)}}/>
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>img</Form.Label>
            <Form.Control type="file" placeholder="img" onChange={(e)=>{setImg(e.target.value)}} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>email</Form.Label>
            <Form.Control type="text" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>country</Form.Label>
            <Form.Control type="text" placeholder="country" onChange={(e)=>{setCountry(e.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>password</Form.Label>
            <Form.Control type="text" placeholder="Password" onChange={(e)=>{setPasswordd(e.target.value)}}/>
        </Form.Group>


        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>password confrim</Form.Label>
            <Form.Control type="email" placeholder="password confrim"/>
        </Form.Group> */}

        <button variant="primary" type="submit">
            Submit
        </button>
        </Form>
        
        </>
    )
}

export default Signup