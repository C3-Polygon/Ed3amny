import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsBellFill, BsSearch, BsGrid3X3GapFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn } from "../../reducers/login/isLoggedIn";
import { useHistory } from "react-router-dom";
import { setUserId } from "../../reducers/login/userId";
// import token from "../../reducers/login/token";

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const test = useSelector((test) => {
    return { isLoggedIn: test.isLoggedIn.isLoggedIn };
  });

  const logout = () => {
    dispatch(setIsLoggedIn(false));
    dispatch(setUserId(""));
    localStorage.clear();
    history.push("/login");
  };

  const loginsender = () => {
      history.push("/login")
  }

  const a = localStorage.getItem("token");

  return (
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
                <button onClick={loginsender}>lelelele</button>
                {/* <Link to="/login">Login</Link> */}
              </div>
            </div>
          </div>
    
        </>
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