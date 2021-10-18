import { useDispatch, useSelector } from "react-redux";
import { React, useState, useEffect ,  } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./EditFundraiser.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './YourFundraisers.css';
import {useHistory} from 'react-router-dom';
import { AiFillCaretLeft } from "react-icons/ai";

import axios from "axios";



export const EditFundraiser = ()=>{
    const {id} = useParams()
    const [post , setPost ] = useState()
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/fundraiser/id/${id}`).then((result)=>{
            console.log("result",result)
            setPost(result.data.result);
        }).catch((err)=>{
            console.log(err)
        })

    })

    return (
    <div className='main-update'>
        <div className='container'>
         <button className='back-button'> <AiFillCaretLeft/> Back</button>
         <div>{post&&post.map((elm,i)=>{
             return (
                 <div key={i} className='update-post-title'>
                  <img src={elm.img} />
                  <div>
                   <h3>Edit & Settings</h3>
                   <p>{elm.title}</p>
                  </div>
                 </div>
                 )
         })}</div>
         
        </div>
    </div>)
}