import { useDispatch, useSelector } from "react-redux";
import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './YourFundraisers.css';
import {useHistory} from 'react-router-dom';
import { AiOutlinePlus } from "react-icons/ai";

import axios from "axios";


const GetAllFundraiserByUser = () => {
  const history = useHistory();
  let tokenSave = localStorage.getItem("token");
  let userIdSave = localStorage.getItem("CurrentUserId");
  const [usersFundraisers,setUsersFundraisers] = useState([])
  
  useEffect(() => {
    axios
      .get(`http://localhost:5000/fundraiser/${userIdSave}`, {
        headers: {
          Authorization: `Bearer ${tokenSave}`,
        },
      })
      .then((result) => {
        console.log("result here", result);
        setUsersFundraisers(result.data.result)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <div className="Main-your-Fundraisers">
      <div className="container">
          
          <div className="Main-title-Fundreiser">
          <h4>Your fundraisers</h4>
          <button> <AiOutlinePlus/> Start a new fundraiser </button>
          </div>


          <div className="row">
            {usersFundraisers&&usersFundraisers.map((post)=>{
              return (
                      <div className="col-lg-4">
                      <div className='Main-View-YourFundraisers'>
                        <img src={post.img}/>
                       <div className='Main-view-content'>
                       <h6>{post.title}</h6>
                         <p> Fundraisers Created : {post.created_at}</p>
                         <hr></hr>
                         <div className='manage-Your-fundraisers'> 
                         <span>Manage</span>
                         </div>
                         
                       </div>
                      </div>
                      </div> 
              )
            })}
          </div>
      </div>
    </div>
</>
)
};

export default GetAllFundraiserByUser;

{/* <h1>{title}</h1>; */}


{/* <> 
<div className="container">
  
  <div className="MainSectionFundRaiserView">
    <div className="Contect-Main-Section">
      {usersFundraisers &&
        usersFundraisers.map((elem,index) => {
            return (
                <div key={index}className="fundRaiserView">                        
                <h1> {elem.country} </h1>
                <h1> {elem.targett}  </h1>
                <h1> {elem.current_target} </h1>
                <h1> {elem.descriptionn} </h1>
              <div className="content">
                <img src={elem.img} />
                <h5>{elem.title}</h5>
                
              </div>
            </div>
          );
        })}
    </div>
  </div>
</div>
</> */}




