import React, { useContext, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import {useHistory} from "react-router-dom";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "./BloodPostView.css";





const CreateBloodPost = (e) => {
  const history = useHistory();
    let tokenSave = localStorage.getItem("token");
    let userIdSave = localStorage.getItem("CurrentUserId")

  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [descriptionn, setDescription] = useState("");
  

  const insertBloodPost = (e) => {
    e.preventDefault();
    const theBloodPostCreated = {
      userId: userIdSave,
      img,
      title,
      descriptionn,
    };
    axios
      .post(`http://localhost:5000/bloodpost/createBloodPost/createBloodPost`, theBloodPostCreated, {
        headers: { Authorization: `Bearer ${tokenSave}` },
      })
      .then((result) => {
        console.log("result", result);
      })
      .catch((err) => {
        console.log(err);
      });
      history.push("/");
  };

 

  return (
    <>
    <div className='Main-Create-Blood'>
    <div className="container">
      <h4>Create New Blood</h4> 
      <Form onSubmit={insertBloodPost}>
       
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Image"
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> Description </Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Form.Group>
        <button variant="primary" type="submit" >
          {" "}
          Start a Campaign{" "}
        </button>
      </Form>
      </div>
    </div>
    </>
  );
};

export default CreateBloodPost