import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Donation.css";
import { AiFillCaretLeft, AiFillDollarCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Label } from "semantic-ui-react";
import Stripe from "../../services/payment/Stripe";
import {setAmount } from "../../../reducers/Donation/AmountReducer"

const Donation = () => {
    const dispatch = useDispatch()
  
  const state = useSelector((state) => {
    
    return { img: state.img.img };
  });
  const state1 = useSelector((state) => {
    
    return { title: state.title.title };
  });
  const state2 = useSelector((state) => {
    
    return { amount: state.amount.amount };
  });
  

  return (
    <div className="main-donation">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 info-donation">
            <button className="button-go-back">
              <AiFillCaretLeft /> Return to fundraiser
            </button>
            <hr></hr>
            <div className="image-title-container">
              <img src={state.img} />
              <h2>You're supporting {state1.title}</h2>
            </div>
            <h4>Enter your donation</h4>
            <div className="dollar-right">
              <input
                dir="rtl"
                onChange={(e) => {
                  dispatch(setAmount(e.target.value ));
                }}
              ></input>
              <AiFillDollarCircle className="dollar-icon" />
            </div>
            <hr></hr>
            <Stripe />
            <p>
              By continuing, you agree with GoFundMe terms and privacy policy.
              Potato PotatoPotato PotatoPotatoPotatoPotatoPotatoPotatoPotatoPotatoPotatoPotato
            </p>
            <hr></hr>

          </div>
          <div className="col-lg-3">
              <div className='amount-donation'>
                  <p>Your donation</p>
                  <div className='amount-donation-right'>
                      
                       <p>Your donation</p>
                       <p>{state2.amount} $</p>
                      

                  </div>
                  <hr></hr>
                  <div className='total-donation'>
                       <p>total donation</p>
                       <p>{state2.amount} $</p>
                  </div>

              </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
