import React , {useState , useEffect} from 'react'
import axios from 'axios';
import './Topfundraiser.css';
import "bootstrap/dist/css/bootstrap.min.css";
import  ProgressBar  from 'react-bootstrap/ProgressBar';

import { AiFillCaretRight} from "react-icons/ai";
 const Topfundraiser = () => {
     const [result, setResult] = useState();
    useEffect(() => {
        axios.get(`http://localhost:5000/fundraiser/getTopFundraiserByCurrentTarget`).then((result) => {
            setResult(result.data.result);
        }).catch((err) => {
            console.log(err);
        },)
      },[]);

    return (
        <>
        <div className="Main-Topfundraiser">
            <div className="container">
                <h2>Top fundraiser</h2>
                <div className="row">
            {result &&
                result.map((data) => {
                return <div className="col-lg-4 col-md-12">
                    <div className="mainViewfundraiser">
                        <img src={data.img} alt='not found photo'/>
                        <div className="mainViewfundraiserText">
                            <h5>{data.title}</h5>
                            <p>{data.descriptionn}</p>
                            {/* bdha await ?? */}
                            <ProgressBar variant="success" now={Math.round((data.current_target / data.targett) * 100)}/>
                             {console.log("D.T",data.targett)}
                             {console.log("D.CT",data.current_target)}
                             {console.log("percentage",(data.current_target*100)/data.targett)}
                            
                            <span className="raised">${data.current_target} raised of</span> <span>${data.targett}</span>
                        </div>
                    </div>
                     </div>;
                })}
                </div>
                <p className='see-more-fundraiser'>See More  <AiFillCaretRight/> </p>
            </div>
        </div>
            
        </>
    )
}

export default Topfundraiser;
