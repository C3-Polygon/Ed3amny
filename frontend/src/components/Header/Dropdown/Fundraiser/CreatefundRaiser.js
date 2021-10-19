//create

import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

import axios from "axios";
// import "./CreatefundRaiser.css;
import userId from "../../../../reducers/login/userId";
import { storage } from "../../../../FireBase/FireBase";

const CreatefundRaiser = (e) => {
  let tokenSave = localStorage.getItem("token");
  let userIdSave = localStorage.getItem("CurrentUserId");
  console.log("userIdSave", userIdSave);
  const state1 = useSelector((state) => {
    return { token: state.token_1.token };
  });
  const state2 = useSelector((state2) => {
    return { userId: state2.userId.userId };
  });
  console.log("1", state2);
  console.log("2", state2.userId);

  const [country, setCountry] = useState("");
  const [typee, setType] = useState("");
  const [targett, setTarget] = useState("");
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [descriptionn, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [phoneNumber,setPhoneNumber] = useState(0);

  const insertfundRaiser = (e) => {
    e.preventDefault();
    const theFundRaiserCreated = {
      userId: state2.userId,
      country:country,
      typee:typee,
      targett:targett,
      img:url,
      title:title,
      descriptionn:descriptionn,
      phoneNumber:phoneNumber
    };
    console.log(theFundRaiserCreated);
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

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress)
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            setUrl(url);
          });
      }
    );
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
          <Form.Label>PhoneNumber</Form.Label>
          <Form.Control
            type="number"
            placeholder="PhoneNumber"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            placeholder="Image"
            onChange={handleChange}
          />
        </Form.Group>
        <button onClick={handleUpload}>Upload Image</button>
            <progress value={progress} max="100" />
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
