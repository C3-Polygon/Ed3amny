import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CreateFundRaiser.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
// import "./CreatefundRaiser.css;
import userId from "../../../../reducers/login/userId";
import { storage } from "../../../../FireBase/FireBase";
import { useHistory } from "react-router-dom";

const CreatefundRaiser = (e) => {
  let tokenSave = localStorage.getItem("token");
  let userIdSave = localStorage.getItem("CurrentUserId");
  const [categorys, setCategorys] = useState();
  const history = useHistory();
  const state1 = useSelector((state) => {
    return { token: state.token_1.token };
  });
  const state2 = useSelector((state2) => {
    return { userId: state2.userId.userId };
  });


  const [country, setCountry] = useState("");
  const [typee, setType] = useState("");
  const [targett, setTarget] = useState("");
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
   const [descriptionn, setDescriptionn] = useState("");
  // const [image, setImage] = useState();
  const [url, setUrl] = useState("");
  // const [progress, setProgress] = useState(0);
  const [phoneNumber,setPhoneNumber] = useState(0);


  const insertfundRaiser = (e) => {
    e.preventDefault();
    const theFundRaiserCreated = {
      userId: state2.userId,
      country: country,
      typee: typee,
      targett: targett,
      img: url,
      title: title,
      descriptionn: descriptionn,
      phoneNumber: phoneNumber,
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
      history.push("/Drop/YourFundraisers")
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/fundraiser/categorys/categorys/categorys")
      .then((result) => {
        setCategorys(result.data.allData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const handleChange = async(e) => {
  //   if (e.target.files[0]) {
  //    await setImage(e.target.files[0]);             await doesnt affect this type of function , it needs time so we handle it by
  //    console.log("inside",e.target.files[0])        targeting 
  //    console.log("inside image",image)
  //   }
    
    //  await  handleUpload()
  // };

  const handleUpload =  (e) => {
    let image = e.target.files[0]
    console.log(image)
       const uploadTask =  storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
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
  const handler = (e) => {
    setType(e.target.value);
  };

  return (
    <>
      <Form onSubmit={insertfundRaiser} >
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter country"
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Select
            aria-label="Default select example"
            as={Col}
            onChange={handler}
          >
            <option value="0">Select a Category</option>
            {categorys &&
              categorys.map((elm) => {
                return <option value={elm.id}>{elm.namee}</option>;
              })}
          </Form.Select>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Target</Form.Label>
            <Form.Control
              type="number"
              placeholder="Target"
              onChange={(e) => {
                setTarget(e.target.value);
              }}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="PhoneNumber"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control
            type="file"
            placeholder="Image"
            onChange={handleUpload}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description"
              onChange={(e) => {
                setDescriptionn(e.target.value);
              }}
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreatefundRaiser;
