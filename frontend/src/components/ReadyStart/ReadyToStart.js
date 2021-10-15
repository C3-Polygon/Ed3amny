import React from 'react'
import { useHistory } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './ReadyToStart.css';
const ReadyToStart = ()=> {
    const history = useHistory();
    return (
        <div className="ready-start">
        <div className="container text-center">
            <h3>Ready to start fundraising?</h3>
            <button type="button" onClick={()=>{history.push("/fundraiser")}}>Start GoFundMe</button>            
        </div> 
        </div>
    )
}

export default ReadyToStart
