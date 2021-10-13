import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../../reducers/login/token";
import { setIsLoggedIn } from "../../../reducers/login/isLoggedIn";
import axios from "axios";
import {setUserId} from "../../../reducers/login/isLoggedIn";


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
      console.log(res.data);
      console.log(res.data.payload.userId);
      if (res.data.success) {
        setMessage("");
        dispatch(setIsLoggedIn(true));
        dispatch(setToken(res.data.token));
        setLogoutChecker(true)
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("logoutChecker" , logoutChecker)
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        return setMessage(error.response.data.message);
      }
    }
  };
  
  //facebookstuff
  const responseFacebook = (response) => {
    if (response.status == "unknown") {
      return;
    }
    setData(response);
    if (!response.picture.data.url) {
      return;
    } else {
      setPicture(response.picture.data.url);
    }
    if (response.accessToken) {
      setLogin1(true);
    } else {
      setLogin1(false);
    }
  }; //end facebookstuff


  return (
    <>
      {!state.isLoggedIn ? (
        <>
          <form onSubmit={loginSender}>
            <br />
            <input
              type="email"
              placeholder="email here"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="password here"
              onChange={(e) => setPasswordd(e.target.value)}
            />
            <br />
            <button>Login</button>
          </form>
          {message && <div>{message}</div>}
        </>
      ) : (
        history.push("/home")
      )}
    </>
  );
};
/*
<>
      <div className="container">
        <Card style={{ width: "600px" }}>
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
      </>
*/
