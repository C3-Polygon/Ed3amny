import React from 'react'
import './section.css';
import imgheader from './img/family-couple-saving-money_74855-5240.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";

import { AiFillVideoCamera } from "react-icons/ai";
function Section() {

const history = useHistory();

    const sendToFundraiser = ()=>{
        history.push('/fundraiser')
    }

    return (
        <div className="Main-section">
        <div className="container">
            <div className="row">

                <div className="col-md-6 col-sm-12 text-header">
                    <h2>Trusted fundraising for all of life's moments</h2>
                    <h5 className="text-secondary">Get help. Give kindness. Start in just 5 minutes.</h5>
                    <div className='row'>
                        <div className='col-md-6'>
                            <button onClick={sendToFundraiser} className='btn-success p-2 btn-Start'>Start GoFundMe</button>
                        </div>
                        <div className='col-md-6 video-section'>
                            <AiFillVideoCamera className='video-show'/>
                            <p>See how GoFundMe is work</p>
                        </div>
                    </div>
                    

                </div>
                <div className="col-md-6 col-sm-12">

                    <img src={imgheader} alt='not found img '/>
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default Section

