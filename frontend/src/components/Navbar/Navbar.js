import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsBellFill, BsSearch, BsGrid3X3GapFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setToken } from "../../reducers/login/token";
import { setIsLoggedIn } from "../../reducers/login/isLoggedIn";
import { setUserId } from "../../reducers/login/userId";
import Dropdown from 'react-bootstrap/Dropdown';
// import token from "../../reducers/login/token";
// import Signup from '../Auth/signup/signup';

import "../Header/Dropdown/Fundraiser/CreatefundRaiser"

const Navbar =   () => {
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
  
  const logout = () =>{
    localStorage.clear()
    history.push("/")
    dispatch(setToken(""));
    dispatch(setIsLoggedIn(false))
  }

  return (
    <div className="Main-Nav">
      <div className="container">
        <div className="navbar">
          <h5>LogoName</h5>
          <div className="search-bar">
            <input type="search" placeholder="Search Here ..." />
            <BsSearch className="search" />
          </div>
          <div>
            
            <div className="navbar">
              { state1.token  ?  (
                <div>
                  <Link to="/fundraiser" className="navFundRaiser">
                    Start Fund Raiser
                  </Link>
                  <button onClick={logout}>
                    log out
                  </button>
                </div>
              ) : (
                <div className='navLinkOption'>
            <BsBellFill />
                <Link to="/login"  className="navLogin">
                  Login
                </Link>  
                  <Link to="/signup" className="navSignup">
                    sgin up
                  </Link>
                  <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                  <BsGrid3X3GapFill />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
                </div>
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



*/
