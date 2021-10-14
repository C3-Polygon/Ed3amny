
import React , { useState , useEffect }from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from 'axios';
import './Random.css';

function Random() {
const [random, setRandom] = useState();
useEffect(() => {
    axios.get(`http://localhost:5000/fundraiser/get/getTopFundraiserByCurrentTarget`).then((res) => {
        setRandom(res.data.result)
    }).catch((err) => {
        console.log(err);
    },)
  },[]);

    return (
      <>
       <div className="Main-Topfundraiser">
            <div className="container">
                <h2>Find a GoFundMe Randomly</h2>
                <div className="row">
            {random &&
                random.map((data) => {
                return <div key = {data.id} className="col-lg-4 col-md-12">
                    <div className="mainViewfundraiser">
                        <img src={data.img} alt='not found photo'/>
                        <div className="mainViewfundraiserText">
                            <h5>{data.title}</h5>
                            <p>{data.descriptionn}</p>
                            <ProgressBar variant="success" now={Math.round((data.current_target / data.targett) * 100)}/>                
                            <span className="raised">${data.current_target} raised of</span> <span>${data.targett}</span>
                        </div>
                    </div>
                     </div>;
                })}
                </div>
            </div>
        </div>
            
      </>
    )
}

export default Random
