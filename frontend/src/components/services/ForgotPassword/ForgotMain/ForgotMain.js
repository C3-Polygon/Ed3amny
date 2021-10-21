import React, { useState } from "react";
import "./ForgotMain.css";

const ForgotMainPage = () => {
const [emailCheck , setEmailCheck] = useState("")
const [showEmailCheck , setShowEmailCheck] = useState(false)
const [smsCheck , setSmsCheck] = useState("")
const [showSmsCheck , setShowSmsCheck] = useState(false)
  const emailCheckForSend = () => {
    setShowEmailCheck(true)
 console.log("showEmailCheck" ,showEmailCheck)
  };

console.log("emailCheck" , emailCheck);
  const smsCheckForSend = () => {
    setShowSmsCheck(true)
 console.log("showSmsCheck" ,showSmsCheck)

  };
 const sendEmail = () =>{

  }

  return (
    <>
      
       {showEmailCheck?( <div className="errorMessage"><br/> <h1> we will send a new password <br/> on your email " {emailCheck} " </h1> 
       <input placeholder='Enter Your Email' onChange={(e)=>{setEmailCheck(e.target.value)}} /> 
       <button onClick={sendEmail}> Send </button> {showEmailCheck}</div>):(
            <div> 
            <button onClick={emailCheckForSend}> email help</button>
            <button onClick={smsCheckForSend}> SMS</button>
            </div> 
       )}
     
    </>
  );
};

export default ForgotMainPage;
