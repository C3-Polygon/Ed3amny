import { useDispatch, useSelector } from "react-redux";
import { React, useState, useEffect } from "react";
import { Card, Image } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import axios from "axios";


const GetAllFundraiserByUser = () => {
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
    {usersFundraisers && usersFundraisers.map((elem,index) => {
return (
  
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={elem.img} />
  <Card.Body>
    <Card.Title>{elem.title}</Card.Title>
    <Card.Text>{elem.descriptionn}</Card.Text>
    <Button variant="primary">Go watch Naruto</Button>
  </Card.Body>
</Card> )

})}
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




