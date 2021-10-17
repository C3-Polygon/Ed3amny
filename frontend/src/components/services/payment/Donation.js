import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Donation.css";
import { AiFillCaretLeft ,AiFillDollarCircle} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Label } from "semantic-ui-react";
import Stripe from "../../services/payment/Stripe";

const Donation = () => {
  const [amount, setAmount] = useState(0);
  const state = useSelector((state) => {
    console.log("state", state);
    return { img: state.img.img };
  });
  const state1 = useSelector((state) => {
    console.log("state", state);
    return { title: state.title.title };
  });

  return (
    <div className="main-donation">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 info-donation">
            <button className="button-go-back">
              <AiFillCaretLeft /> Return to fundraiser
            </button>
            <hr></hr>
            <div className="image-title-container">
              <img src={state.img} />
              <h2>You're supporting {state1.title}</h2>
            </div>
            <h4>Enter your donation</h4>
            <div className='dollar-right'>
             <input 
             dir="rtl"          
              onChange={(e) => {
                setAmount(e.target.value * 100);
              }}              
             ></input>
             <AiFillDollarCircle className='dollar-icon'/>
            </div>
            <hr></hr>
            <Stripe />

          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
