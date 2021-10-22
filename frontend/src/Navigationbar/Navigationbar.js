import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BsBellFill, BsSearch, BsGrid3X3GapFill } from "react-icons/bs";
import axios from "axios";
import "./Navigationbar.css"

//reducers
import {setToken} from "../reducers/login/token"
import {setIsLoggedIn} from "../reducers/login/isLoggedIn"
import {setUserId} from "../reducers/login/userId"
import {setText1} from "../reducers/search/searchReducer"
import token from "../reducers/login/token";

//components
import Categories from "../components/categories/Categories"
import Signup from "../components/Auth/signup/signup"
import AllCategory from "../components/AllCategory/AllCategory"
import "../components/Header/Dropdown/Fundraiser/CreatefundRaiser"

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"



const Navigationbar = () => {

    const [title, setTitle] = useState([]);
    const [text, setText] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const tokenSave = localStorage.getItem("token");
    const history = useHistory();
    const dispatch = useDispatch();

    const state = useSelector((state) => {
      return { isLoggedIn: state.isLoggedIn.isLoggedIn };
    });
    const state1 = useSelector((state1) => {
      return { token: state1.token_1.token };
    });
    const state2 = useSelector((state2) => {
      return { userId: state2.userId.userId };
    });
    const state3 = useSelector((state3) => {
      return { userAvatar: state3.userAvatar.userAvatar };
    });


    const [show, setShow] = useState(false);
 

    const logout = () => {
      localStorage.clear();
      history.push("/");
      dispatch(setToken(""));
      dispatch(setIsLoggedIn(false));
    };
  
    useEffect(() => {
      const loadTitle = async () => {
        const response = await axios.get(
          `http://localhost:5000/search?name=${text}`
        );
        console.log("response.data.search", response.data.search);
        setTitle(response.data.search);
      };
      loadTitle();
    }, []);
  
    const onSuggestHandler = (text) => {
      setText(text);
      setSuggestions([]);
    };
  
    const onChangeHandler = (text) => {
      setText(text);
      let matches = [];
      if (text.length > 0) {
        matches = title.filter((elm) => {
          const regex = new RegExp(`${text}`, "gi");
          return elm.title.match(regex);
        });
      }
      setSuggestions(matches);
    };
  
    const searchResult = () =>{
      dispatch(setText1(text))
      history.push('/search')
    }



    return (
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Ed3amny</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <img src={state3.userAvatar} alt="xxx " width="50px" height="50px" className="userAvatar"></img>
        <NavDropdown  id="navbarScrollingDropdown" >
          <NavDropdown.Item onClick={()=> history.push("/Drop/AccountSettings")}>Account Settings</NavDropdown.Item>
          <NavDropdown.Item onClick={()=> history.push("/Contributions/Contributions/Contributions/Contributions")}>Donations You've Made</NavDropdown.Item>
          <NavDropdown.Item onClick={()=> history.push("/Drop/YourFundraisers")}>Your Fundraisers</NavDropdown.Item>
          <NavDropdown.Item onClick={()=> history.push("/fundraiser")}>Start a Fundraiser</NavDropdown.Item>
          <NavDropdown.Item onClick={()=> history.push("/Drop/Blood/BloodPost/Create")}>Ask For a Blood Donation</NavDropdown.Item>
          
          <NavDropdown.Item disabled onClick={()=> history.push("/Drop/DonateForSpecific")}>Specific Donation</NavDropdown.Item>

          <NavDropdown.Divider />
          <NavDropdown.Item onClick={logout}>
          Signout
          </NavDropdown.Item>
        </NavDropdown>

        <Nav.Link onClick={()=> history.push("/")}>Home</Nav.Link>
        <div> <Categories/></div>
        
        <Nav.Link href="#" enabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
        onChange={(e) => {
            onChangeHandler(e.target.value);
          }}
          value={text}
          onBlur={() => {
            setTimeout(() => {
              setSuggestions([]);
            }, 100);
          }} 
        onKeyPress={(e) => {
            if (e.key === "Enter") {
              searchResult();
            }
          }}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          
        />
        {/* {suggestions &&
              suggestions.map((elm, i) => {
                return (
                  <div key={i} onClick={() => onSuggestHandler(elm.title)}>
                    {elm.title}
                  </div>
                );
              })} */}
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar> 


    )
 }


export default Navigationbar;


 