import React, { useState } from "react";
import "./ForgotMain.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
const ForgotMainPage = () => {
    const history = useHistory();
  const [emailCheck, setEmailCheck] = useState("");
  const [showEmailCheck, setShowEmailCheck] = useState(false);
  const [smsCheck, setSmsCheck] = useState("");
  const [showSmsCheck, setShowSmsCheck] = useState(false);

  const emailCheckForSend = () => {
    setShowEmailCheck(true);
    console.log("showEmailCheck", showEmailCheck);
  };

  const smsCheckForSend = () => {
    setShowSmsCheck(true);
    console.log("showSmsCheck", showSmsCheck);
  };
  const sendEmail = (e) => {
    console.log("i am here");
    e.preventDefault();
    let email = emailCheck;
    console.log(email);
    axios
      .post("http://localhost:5000/forgetPassword", { email })
      .then((result) => {
        console.log("result", result);
      })
      .catch((err) => {
        console.log(err);
      });
    setEmailCheck("");
    history.push('/login')
  };
  console.log("showEmailCheck 2", showEmailCheck);
  return (
    <>
      {showEmailCheck ? (
        <div className="errorMessage">
          <br />{" "}
          <h1>
            {" "}
            we will send a new password <br /> on your email " {
              emailCheck
            } "{" "}
          </h1>
          <input
            placeholder="Enter Your Email"
            onChange={(e) => {     
              setEmailCheck(e.target.value);
            }}
          />
          <button onClick={sendEmail} type="submit">
            {" "}
            Send{" "}
          </button>{" "}
        </div>
      ) : (
        <div>
          <button onClick={emailCheckForSend}> email help</button>
          <button onClick={smsCheckForSend}> SMS</button>
        </div>
      )}
    </>
  );
};

export default ForgotMainPage;
