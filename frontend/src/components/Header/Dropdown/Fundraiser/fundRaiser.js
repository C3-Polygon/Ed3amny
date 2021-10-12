//create

import React, { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import jwt from "jsonwebtoken";
import axios, { Axios } from 'axios';
import './fundRaiser.css'

 /*  
    country VARCHAR(255) NOT NULL,
    typee INT NOT NULL,
    targett INT NOT NULL,
    img BLOB(5120),
    title VARCHAR(255) NOT NULL,
    descriptionn VARCHAR(255) NOT NULL,
      */
 



const CreatefundRaiser = (e) => {

const [country , setCountry] = useState('');
const [typee , setType] = useState('');
const [targett , setTarget] = useState('');
const [img , setImg] = useState('');
const [title , setTitle] = useState('');
const [descriptionn , setDescription] = useState('');

const insertfundRaiser =(e)=>{
    console.log("mmmmmmmmmmmmmmmmmmmmmmmmmm");
    e.preventDefault();
    const theFundRaiserCreated = {
        userId:1,
        country,
        typee,
        targett,
        img,
        title,
        descriptionn
    }
    axios.post(`http://localhost:5000/fundraiser` , theFundRaiserCreated).then((result)=>{
        console.log("result" , result);
    }).catch((err)=>{
        console.log(err);
    })
}
    return (
        <>
    <Form onSubmit={insertfundRaiser}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Country </Form.Label>
        <Form.Control type="text" placeholder="Enter country"  onChange={(e)=>{setCountry(e.target.value)}}/>
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Type </Form.Label>
        <Form.Control type="text" placeholder="Type" onChange={(e)=>{setType(e.target.value)}} />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Target</Form.Label>
        <Form.Control type="number" placeholder="Target" onChange={(e)=>{setTarget(e.target.value)}}/>
    </Form.Group>
    
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" placeholder="Image" onChange={(e)=>{setImg(e.target.value)}} />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" onChange={(e)=>{setTitle(e.target.value)}}/>
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Description </Form.Label>
        <Form.Control type="text" placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}}/>
    </Form.Group>
    <button variant="primary" type="submit" >    Start a Campaign    </button>
    </Form>
        </>
    )
}



export default CreatefundRaiser ;
//delete
//update

/*

//===============================================================
const NewArticle = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const state = useSelector((state) => {
    return { isLoggedIn: state.isLoggedIn.isLoggedIn };
  });
  const state1 = useSelector((state2) => {
    return { token: state2.token_1.token };
  });
  const validateToken = () => {
    const user = jwt.decode(state1.token);
    if (!user) throw new Error();
  };
  //===============================================================
  const createNewArticle = async (e) => {
    e.preventDefault();
    try {
      console.log("token",state1.token)
      validateToken();
      const article = {
        title,
        description,
      };
      const result = await axios.post(
        "http://localhost:5000/articles",
        article,
        {
          headers: {
            Authorization: `Bearer ${state1.token}`,
          },
        }
      );
      if (result && result.data && result.data.success) {
        console.log("resulteeeeeeee", result.data);
        dispatch(addArticles(result.data.articles))
        setMessage("The article has been created successfully");
      } else throw Error;
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        !error.response.data.success
      ) {
        return setMessage(error.response.data.message);
      }
    }
  };
  //===============================================================
  useEffect(() => {
    if (!state.isLoggedIn) {
      history.push("/dashboard");
    }
  });
  //===============================================================
  return (
    <>
      <form onSubmit={createNewArticle}>
        <br />
        <input
          type="text"
          placeholder="article title here"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="article description here"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <button>Create New Article</button>
      </form>
      <br />
      {message && <div>{message}</div>}
    </>
  );
};


*/


/**
 *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  ***  *   *  *** 
 *   Fundraiser Title           ProgressBAR 1000/2000          *
 *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  ** *  *  *** 
 *                          *                                  *
 *                          *                                  *
 *                          *                                  *
 * Image section            *      Description                 *
 *                          *                                  *
 *                          *                                  *
 *                          *                                  *
 *                          *                                  *
 *                          *                                  *
 *                          *                                  *          // update, delete will be done from drop down
 *                          *  Donate                          *          // share will have its own link to share component button
 *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  ** *  *  *  *** 
 */

// we might add more stuff, we will see