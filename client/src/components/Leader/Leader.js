import React from 'react'
import './Leader.css';
import { FaHandHoldingMedical , FaMobileAlt } from 'react-icons/fa';
import {AiOutlineAreaChart , AiFillCar} from 'react-icons/ai';
import {FiUsers} from 'react-icons/fi';
import {RiSecurePaymentFill} from 'react-icons/ri';

function Leader() {
    return (
        <>
        
        <div className="features">


        <div className="title">
        <h1>The leader in online fundraising</h1>
        </div>
        <div className="containerr">
        <div className="feat">
            <FaHandHoldingMedical className='icons'/>
            <h5>Blood Donations</h5>
            <p>
            Ability to create Blood Donation Posts and share them.
            </p>
        </div>
        <div className="feat">
            <FaMobileAlt className='icons'/>
            <h5>Mobile Friendly</h5>
            <p>
            Ability to use on mobile phones, responsive design.
            </p>
        </div>
        <div className="feat">
            <RiSecurePaymentFill className='icons'/>
            <h5>Donor protection guarantee</h5>
            <p>
            Ed3amny has the first and only donor guarantee in the industry.
            </p>
        </div>
        <div className="feat">
            <FiUsers className='icons'/>
            <h5>Social Media</h5>
            <p>
            Ability to share fundraisers and posts on social media.
            </p>
        </div>
        <div className="feat">
            <AiOutlineAreaChart className='icons'/>
            <h5>Simple setup</h5>
            <p>
            You can personalise and share your Fundraiser in just a few minutes.
            </p>
        </div>
        <div className="feat">
            <AiFillCar className='icons'/> 
            <h5>Drive away!</h5>
            <p>
            Our best-in-class Customer Care agents will answer your questions, day and night.
            </p>
        </div>
        </div>
  </div>
        </>
    )
}

export default Leader
