import {React,useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card';
import axios from "axios";


function BloodPostView() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);





  return (
    <div>
      <>
        <Button variant="primary" onClick={handleShow}>
          View BloodPosts
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
           
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={"test"} />
            <Card.Body>
          <Card.Title>{"test"}</Card.Title>
         <Card.Text>{"test"}</Card.Text>
          <Button variant="primary">Go watch Naruto</Button>
        </Card.Body>
            </Card>


          </Offcanvas.Body>
        </Offcanvas>
      </>
    </div>
  );
}

export default BloodPostView;
