//create

import React, { useContext, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

import axios, { Axios } from "axios";
import "./fundRaiser.css";



const CreatefundRaiser = (e) => {
    let tokenSave = localStorage.getItem("token");
  const state1 = useSelector((state) => {
    return { token: state.token_1.token };
  });

  const [country, setCountry] = useState("");
  const [typee, setType] = useState("");
  const [targett, setTarget] = useState("");
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [descriptionn, setDescription] = useState("");
  


  const insertfundRaiser = (e) => {
    e.preventDefault();
    const theFundRaiserCreated = {
      userId: 1,
      country,
      typee,
      targett,
      img,
      title,
      descriptionn,
    };
    axios
      .post(`http://localhost:5000/fundraiser`, theFundRaiserCreated, {
        headers: { Authorization: `Bearer ${tokenSave}` },
      })
      .then((result) => {
        console.log("result", result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Form onSubmit={insertfundRaiser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Country </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> Type </Form.Label>
          <Form.Control
            type="text"
            placeholder="Type"
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Target</Form.Label>
          <Form.Control
            type="number"
            placeholder="Target"
            onChange={(e) => {
              setTarget(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
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
        <button variant="primary" type="submit">
          {" "}
          Start a Campaign{" "}
        </button>
      </Form>
    </>
  );
};

export default CreatefundRaiser;
//delete
//update


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
