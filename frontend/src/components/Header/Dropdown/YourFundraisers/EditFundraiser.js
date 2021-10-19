import { useDispatch, useSelector } from "react-redux";
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EditFundraiser.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs"
import "./YourFundraisers.css";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';

import { useHistory } from "react-router-dom";
import { AiFillCaretLeft } from "react-icons/ai";

import axios from "axios";
import {
  AiOutlineCloseSquare
} from "react-icons/ai";

export const EditFundraiser = () => {
  const history = useHistory()
  const { id } = useParams();
  const [post, setPost] = useState();
  const [showbtnDelete, setShowbtnDelete] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/fundraiser/id/${id}`)
      .then((result) => {
        console.log("result", result);
        setPost(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const softDelete = ()=>{
    axios.put(`http://localhost:5000/fundraiser/soft/delete/fundreiser/${id}`).then((result) => {
      console.log("deleted");
      history.goBack();
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="main-update">
      <div className="container">
        <button onClick={()=>{history.goBack()}} className="back-button">
          {" "}
          <AiFillCaretLeft /> Back
        </button>
        <div>
          {post &&
            post.map((elm, i) => {
              return (
                <div key={i} className="update-post-title">
                  <img src={elm.img} />
                  <div>
                    <h3>Edit & Settings</h3>
                    <p>{elm.title}</p>
                  </div>
                </div>
              );
            })}
        </div>
        <hr></hr>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="overview" title="Overview">
          {post &&
            post.map((elm, i) => {
              return (
                <div key={i} className="update-post-overview">
                <Form>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" value={elm.title} />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="number" value={elm.current_target} />
                      </Form.Group>
                    </Row>
                  <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" value={elm.country} />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label> Goal</Form.Label>
                        <Form.Control type="number" value={elm.targett} />
                      </Form.Group>
                    </Row>

                    <button className="Save-update" type="submit">Save</button>
                  </Form>
                </div>
              );
            })}
            
          </Tab>
          <Tab eventKey="photo" title="Photo">
          {post &&
            post.map((elm, i) => {
              return (
                <div key={i} className="update-post-photo">
                  <img src={elm.img} />
                  
                  <button className="Save-update" type="submit">Change</button>
                </div>
              );
            })}
            
          </Tab>
          <Tab eventKey="story" title="Story">
          {post &&
            post.map((elm, i) => {
              return (
                <div key={i} className="update-post-story">
                  
                  <div>
                    
                    <p>{elm.descriptionn}</p>
                    
                    <button className="Save-update" type="submit">Save</button>
                  </div>
                </div>
              );
            })}
            
          </Tab>

        </Tabs>
        <div className="Delete-my-postinfo">
          <div>
            <h5>Delete my fundraiser</h5>
            <p>You will no longer have access to this fundraiser after deleting.<br></br>
              f you received donations, your donors will still be able to view a summary.</p>
          </div>
          
          <p onClick={()=>{setShowbtnDelete(!showbtnDelete)}} className="btn-delete-post">Delete</p>
          </div>

          {showbtnDelete && (
            <div class='model-delete-post'>
            <div className='info-deleted'>
            
            <AiOutlineCloseSquare className='close-pop' onClick={()=>{setShowbtnDelete(!showbtnDelete)}}/>
            <div className='text-center'>
              <h3>Delete your fundraiser</h3>
              <hr></hr>

              <p>
              You will no longer have access to this fundraiser after deleting
              </p>
              <button className='confirm-delete-post' onClick={softDelete}>Delete fundraiser</button> 
            </div>
            </div>
          </div>
          )
          }
      </div>

    </div>
  );
};
