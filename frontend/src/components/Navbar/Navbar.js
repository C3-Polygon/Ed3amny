import React, { useState, useEffect } from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsBellFill, BsSearch, BsGrid3X3GapFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setToken } from "../../reducers/login/token";
import { setIsLoggedIn } from "../../reducers/login/isLoggedIn";
import { setUserId } from "../../reducers/login/userId";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import Categories from '../categories/Categories';
// import token from "../../reducers/login/token";
// import Signup from '../Auth/signup/signup';

import "../Header/Dropdown/Fundraiser/CreatefundRaiser";

const Navbar = () => {
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
    console.log(text);
    let matches = [];
    if (text.length > 0) {
      matches = title.filter((elm) => {
        const regex = new RegExp(`${text}`, "gi");
        return elm.title.match(regex);
      });
    }
    console.log(matches, "matches");
    setSuggestions(matches);
    setText(text);
  };

  return (
    <div className="Main-Nav">
      <div className="container">
        <div className="navbar">
          
            
          <h5 onClick={() => history.push("/")}>LogoName</h5>
            {/* <img src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F12%2F08%2Fgofundme.jpg&q=85' alt="!"/> */}
            <Categories/>
           

          <div className="search-bar">
            <input
              type="search"
              placeholder="Search Here ..."
              onChange={(e) => {
                onChangeHandler(e.target.value);
              }}
              value={text}
              onBlur={() => {
                setTimeout(() => {
                  setSuggestions([]);
                }, 100);
              }}
            />
            {suggestions &&
              suggestions.map((elm, i) => {
                return (
                  <div key={i} onClick={() => onSuggestHandler(elm.title)}>
                    {elm.title}
                  </div>
                );
              })}
            <BsSearch className="search" />
          </div>
          <div>
            <div className="navbar">
              {state1.token || tokenSave || state.isLoggedIn ? (
                <div className="navLinkOption">
                  <Link to="/fundraiser" className="navFundRaiser">
                    Start Fund Raiser
                  </Link>
                  <BsBellFill />

                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                      <BsGrid3X3GapFill />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={()=> history.push("/AccountSettings")}>
                        Account Settings
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Donations You've Made
                      </Dropdown.Item>
                      <Dropdown.Item onClick={()=> history.push("/YourFundraisers")}>
                        Your Fundraisers
                      </Dropdown.Item>
                      <Dropdown.Item onClick={()=> history.push("/fundraiser")}>
                        Start a Fundraiser
                      </Dropdown.Item>
                      <Dropdown.Item onClick={()=> history.push("/DonateForSpecific")}>
                        Specific Donation
                      </Dropdown.Item>
                      <Dropdown.Item onClick={logout}>Signout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              ) : (
                <Link to="/login" className="navLogin">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

/*
return (
    <>
      {test.isLoggedIn || a ? (
        <>
          <div className="container">
            <div className="navbar">
              <h5>LogoName</h5>
              <div className="search-bar">
                <input type="search" placeholder="Search Here ..." />
                <BsSearch className="search" />
              </div>
              <div>
                <BsBellFill />
                <BsGrid3X3GapFill className="small-media" />
                <button onClick={logout}>Logout</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
         <div className="container">
            <div className="navbar">
              <h5>LogoName</h5>
              <div className="search-bar">
                <input type="search" placeholder="Search Here ..." />
                <BsSearch className="search" />
              </div>
              <div>
                <BsBellFill />
                <BsGrid3X3GapFill className="small-media" />
                <button onClick={loginsender}>login</button>
                <Link to="/login">Login</Link>
              </div>
            </div>
          </div>
    
        </>
      )}
    </>
  );


 <button onClick={logout}>
                    log out
                  </button>
*/
