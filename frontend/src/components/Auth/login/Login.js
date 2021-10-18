import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../../reducers/login/token";
import { setIsLoggedIn } from "../../../reducers/login/isLoggedIn";
import axios from "axios";
import { setUserId } from "../../../reducers/login/userId";
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"; 
import Form from 'react-bootstrap/Form';
import './login.css';
// @ OBADA OBADA OBADA   DONT DELETE FACEBOOK IMPORTS AGAIN    -- Thank you

// import {Signup} from "./../signup/signup"


export const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [passwordd, setPasswordd] = useState("");
  const [logoutChecker , setLogoutChecker] = useState(false)
  //facebookstuff
  const [login1, setLogin1] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");
  const dispatch = useDispatch();



  const state = useSelector((state) => {
    return { isLoggedIn: state.isLoggedIn.isLoggedIn };
  });

  const state1 = useSelector((state) => {
    return { token: state.token_1.token };
  });
  
  const loginSender = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        passwordd,
      });
      if(res.data.payload.email === "15@15.com"){
        history.push('/adminPage');
        
      }else{
        if (res.data.success) {
          setMessage("");
          dispatch(setIsLoggedIn(true));
          dispatch(setToken(res.data.token));
          dispatch(setUserId(res.data.payload.userId))
          setLogoutChecker(true)
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("logoutChecker" , logoutChecker)
          localStorage.setItem("CurrentUserId",res.data.payload.userId)
          history.push("/")
        } else throw Error;
      }
    } catch (error) {
      if (error.response && error.response.data) {
        return setMessage(error.response.data.message);
      }
    }
  };
  
  //facebookstuff
  const responseFacebook = async(response) => {
    if (response.status == "unknown") {
      return;
    }
    console.log("fb response",response)
    console.log("fb response",response.accessToken)
    setData(response);
    if (!response.picture.data.url) {
      return;
    } else {
    await  dispatch(setIsLoggedIn(true));
    await  dispatch(setToken(response.accessToken));
    await  dispatch(setUserId(response.userID))
    await  localStorage.setItem("token", response.accessToken);
    await  localStorage.setItem("CurrentUserId",response.userID)
    await  setPicture(response.picture.data.url);
      
    }
    if (response.accessToken) {
      setLogin1(true);
      history.push("/")
    } else {
      setLogin1(false);
    }
  }; //end facebookstuff


  return (
    <>
        <div className="main-form">
          <div className="form-login">
            <h3 className="title-form">Sign in </h3>
            <hr></hr>
            <div className="login-with-facebook">
            <Card>
          <Card.Header>
            {!login1 && (
              <FacebookLogin
                appId="1259903211090202"
                autoLoad={false}
                fields="name,email,picture"
                scope="public_profile,user_friends"
                callback={responseFacebook}
                icon="fa-facebook"
              />
            )}
            {login1 && <Image src={picture} roundedCircle />}
          </Card.Header>
          {login1 && (
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>{data.email}</Card.Text>
            </Card.Body>
          )}
        </Card>
            </div>

            <div className="option-login">

            <span>or</span>
            </div>
        <Form onSubmit={loginSender} className=''>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password"  onChange={(e) => setPasswordd(e.target.value)}/>
  </Form.Group>
  <input type="submit" className="sgin-btn" value='Sign in to GoFundMe'/>
</Form>
<hr></hr>
<div className='forget-password'>

  <p>Forget Password ?</p>
</div>
        </div>
        </div>

    </>
  );
};
/*

*/
