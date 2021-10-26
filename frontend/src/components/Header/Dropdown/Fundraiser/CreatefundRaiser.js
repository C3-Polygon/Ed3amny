import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./CreateFundRaiser.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { storage } from "../../../../FireBase/FireBase";
import { useHistory } from "react-router-dom";
// import "./CreatefundRaiser.css;
// import userId from "../../../../reducers/login/userId";

const CreatefundRaiser = (e) => {
  let tokenSave = localStorage.getItem("token");
  // let userIdSave = localStorage.getItem("CurrentUserId");
  // const [progress, setProgress] = useState(0);
    // const [image, setImage] = useState();

  // const state1 = useSelector((state) => {
  //   return { token: state.token_1.token };
  // });
  const state2 = useSelector((state2) => {
    return { userId: state2.userId.userId };
  });

  const [categorys, setCategorys] = useState();
  const history = useHistory();
  const [country, setCountry] = useState("");
  const [typee, setType] = useState("");
  const [targett, setTarget] = useState("");
  const [title, setTitle] = useState("");
  const [descriptionn, setDescriptionn] = useState("");
  const [url, setUrl] = useState("");
  const [phoneNumber,setPhoneNumber] = useState(0);
  // const [img, setImg] = useState("");


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
  }, [categorys]);
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
            setUrl(url);
          });
      }
    );
  };
  const handler = (e) => {
    setType(e.target.value);
  };

  return (
    <div className="Create-fundraiser-form">
    <div className="container">
      <h4>Create New Fundraiser</h4>
    <Form onSubmit={insertfundRaiser}>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Your Fundraiser Title </Form.Label>
      <Form.Control type="text" placeholder="Here ..." onChange={(e)=>{setTitle(e.target.value)}}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
     <Form.Label>Set your fundraising goal</Form.Label>
      <Form.Control type="number" placeholder="Here ... " onChange={(e)=>{setTarget(e.target.value)}} />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Upload image</Form.Label>
    <Form.Control type='file' placeholder="Image"
            onChange={handleUpload}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Your Fundraiser description </Form.Label>
    <textarea className="form-control" type="text" id="exampleFormControlTextarea1" placeholder="Here ..." rows="3" onChange={(e)=>{setDescriptionn(e.target.value)}} maxLength="245" ></textarea>
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Country</Form.Label>
      <Form.Control placeholder="Here ..." type='text' onChange={(e)=>{setCountry(e.target.value)}}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Category</Form.Label>
      <Form.Select aria-label="Default select example"
 onChange={handler}> 
      <option value="0">Select a Category</option>
      {categorys &&
              categorys.map((elm,index) => {
                return <option key = {index} value={elm.id}>{elm.namee}</option>;
              })}
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>PhoneNumber</Form.Label>
      <Form.Control type='number' placeholder="Here ..." onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
    </Form.Group>
  </Row>

  <button variant="primary" type="submit">
    Submit
  </button>
</Form>
</div>
    </div>
  );
};

export default CreatefundRaiser;
