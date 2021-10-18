import { useDispatch, useSelector } from "react-redux";
import { React, useState, useEffect ,  } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './YourFundraisers.css';
import {useHistory} from 'react-router-dom';
import { AiOutlinePlus } from "react-icons/ai";

import axios from "axios";



export const EditFundraiser = ()=>{
    const {id} = useParams()

    return (<div>{id}</div>)
}