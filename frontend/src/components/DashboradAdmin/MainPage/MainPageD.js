import React, { useState, useEffect } from "react";
import "../Slider/Slider.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { storage } from "../../../FireBase/FireBase";
import {
  AiFillEye,
  AiTwotoneSchedule,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import Home from "../../services/Chat/home";
import { setUserId } from "../../../reducers/login/userId";
import { setIsLoggedIn } from "../../../reducers/login/isLoggedIn";
import { setToken } from "../../../reducers/login/token";
import { useDispatch } from "react-redux";
function MainPageD() {
  console.log("mainpage D");
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");
  const [namee, setNamee] = useState("");
  const [descriptionn, setDescription] = useState("");
  const history = useHistory();
  const [fundraiser, setFundraiser] = useState();
  const [user, setUser] = useState();
  const [pendingpost, setPendingpost] = useState();
  const [getfundraiser, setGetfundraiser] = useState([]);
  const [homePage, setHomePage] = useState(true);
  const [users, setUsers] = useState();
  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/fundraiser/admin/dashbord/get/getallfundreiser`
      )
      .then((result) => {
        setFundraiser(result.data.allData.length);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:5000/admin/users`)
      .then((result) => {
        setUser(result.data.result.length);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:5000/admin/pending`)
      .then((result) => {
        setPendingpost(result.data.Fundraiser.length);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        `http://localhost:5000/fundraiser/admin/dashbord/get/getallfundreiser`
      )
      .then((result) => {
        setGetfundraiser(result.data.allData);
        return;
      })
      .catch((error) => {
        throw error;
      });
    axios
      .get(`http://localhost:5000/admin/users`)
      .then((result) => {
        setUsers(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleUpload = (e) => {
    let image = e.target.files[0];
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
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

  const insertStory = (e) => {
    e.preventDefault();
    const newStory = {
      img: url,
      namee,
      descriptionn,
    };
    axios
      .post(`http://localhost:5000/admin/story`, newStory)
      .then((result) => {
        console.log("result", result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getallpost = () => {
    axios
      .get(
        `http://localhost:5000/fundraiser/admin/dashbord/get/getallfundreiser`
      )
      .then((result) => {
        setGetfundraiser(result.data.allData);
        return;
      })
      .catch((error) => {
        throw error;
      });
  };

  const Accsept = (id) => {
    axios
      .put(`http://localhost:5000/admin/accept/${id}`)
      .then((result) => {
        getallpost();
      })
      .catch((err) => {
        throw err;
      });
  };

  const reject = (id) => {
    axios
      .put(
        `
        http://localhost:5000/admin/rejected/${id}`
      )
      .then((result) => {
        getallpost();
      })
      .catch((err) => {
        throw err;
      });
  };

  const pending = (id) => {
    axios
      .put(
        `
        http://localhost:5000/admin/batataa/batata/pending/${id}`
      )
      .then((result) => {
        getallpost();
      })
      .catch((err) => {
        throw err;
      });
  };

  const ChangeFundraiserType = (id, typepost) => {
    if (typepost === 0) {
      Accsept(id);
    } else if (typepost === 1) {
      reject(id);
    } else {
      pending(id);
    }
  };

  const logout = () => {
    localStorage.clear();
    history.push("/");
    dispatch(setToken(""));
    dispatch(setIsLoggedIn(false));
    dispatch(setUserId(0));
  };
  return (
    <>
      {/** Start Navbar */}
      <header>
        <h2>
          <label for="nav-toggle">
            <span class="las la-bars"></span>
          </label>{" "}
          Admin
        </h2>

        <div class="search-wrapper">
          <span class="las la-search"></span>
          <input type="search" placeholder="Search ..." />
        </div>
        <div class="user-wrapper">
          <div>
            <h4>Administrator</h4>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      </header>

      {/** End Navbar */}

      {/** Start Sidebar */}
      <input type="checkbox" id="" />

      <div class="sidebar">
        <div class="sidebar-brand">
          <h2>
            {" "}
            <span>Dashborad</span>
          </h2>
        </div>
        <div class="sidebar-menu">
          <ul>
            <li
              className="active"
              onClick={() => {
                setHomePage(!homePage);
              }}
            >
              <span class="las la-home"></span> home
            </li>
            <li
              onClick={() => {
                setHomePage(!homePage);
              }}
            >
              <span class="las la-user"></span> Add story
            </li>
          </ul>
        </div>
      </div>

      {/** ENd Sidebar */}

      <div className="main-content">
        <main>
          {homePage ? (
            <>
              {/* Start Card Count */}
              <div class="cards">
                <div class="card-single">
                  <div>
                    <h1> {fundraiser} </h1>
                    <span> All fundraisers </span>
                  </div>
                  <div>
                    <span>
                      <AiTwotoneSchedule className="icon-show" />
                    </span>
                  </div>
                </div>

                <div class="card-single">
                  <div>
                    <h1> {user} </h1>
                    <span> Total Users </span>
                  </div>
                  <div>
                    <span>
                      <AiOutlineUsergroupAdd className="icon-show" />
                    </span>
                  </div>
                </div>

                <div class="card-single">
                  <div>
                    <h1>
                      {" "}
                      {pendingpost !== 0 ? (
                        pendingpost
                      ) : (
                        <h6> There 's No Pending Fundraisers</h6>
                      )}
                    </h1>
                    <span> Pending Fundraisers </span>
                  </div>
                  <div>
                    <span>
                      <AiFillEye className="icon-show" />
                    </span>
                  </div>
                </div>

                <div class="card-single">
                  <div>
                    <h1> 2 </h1>
                    <span> other one </span>
                  </div>
                  <div>
                    <span class="lab la-wpforms"> </span>
                  </div>
                </div>
              </div>{" "}
              {/* End Card Count */}
              {/** Start Fundraiser recientes*/}
              <div class="recent-grid">
                <div class="projects">
                  <div class="card">
                    <div class="card-header">
                      <h3> Recent Fundraisers </h3>

                      <button>
                        {" "}
                        See More <span class="las la-arrow-right"></span>
                      </button>
                    </div>

                    <div class="card-body">
                      <div class="table-responsive">
                        <table width="100%">
                          <thead>
                            <tr>
                              <td> #id </td>
                              <td> Fundraiser Title </td>
                              <td> Status </td>
                            </tr>
                          </thead>
                          <tbody>
                            {" "}
                            {getfundraiser &&
                              getfundraiser.map((post, index) => {
                                return (
                                  <tr key={index}>
                                    <td> {post.id} </td>
                                    <td> {post.title} </td>
                                    <td>
                                      {" "}
                                      {post.is_deleted === 0 ? (
                                        <span
                                          className="status yellow"
                                          onClick={() => {
                                            ChangeFundraiserType(post.id, 0);
                                          }}
                                        >
                                          {" "}
                                        </span>
                                      ) : post.is_deleted === 1 ? (
                                        <span
                                          className="status green"
                                          onClick={() => {
                                            ChangeFundraiserType(post.id, 1);
                                          }}
                                        ></span>
                                      ) : post.is_deleted === 2 ? (
                                        <span
                                          className="status red"
                                          onClick={() => {
                                            ChangeFundraiserType(post.id, 2);
                                          }}
                                        >
                                          {" "}
                                        </span>
                                      ) : (
                                        console.log("UnKnown")
                                      )}
                                    </td>{" "}
                                  </tr>
                                );
                              })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                {/** End Fundraiser recientes*/}

                {/** Start users recientes*/}

                <div class="customers">
                  <div class="card">
                    <div class="card-header">
                      <h3> Recent users </h3>

                      <button>
                        {" "}
                        See More <span class="las la-arrow-right"></span>
                      </button>
                    </div>

                    <div class="card-body">
                      {" "}
                      {users &&
                        users.map((user, index) => {
                          return (
                            <>
                              <div class="customer" key={index}>
                                <div class="info">
                                  <img
                                    src={user.img}
                                    width="40px"
                                    height="40px"
                                    alt=""
                                  />
                                  <div>
                                    <h4> {user.firstName} </h4>
                                    <small> {user.country} </small>
                                  </div>
                                </div>
                                <div class="contact">
                                  <span class="las la-user-circle"> </span>
                                  <span class="lab la-whatsapp"> </span>
                                  <span class="las la-phone"> </span>
                                </div>
                              </div>
                            </>
                          );
                        })}
                    </div>
                  </div>
                </div>

                {/** End users recientes*/}
              </div>
            </>
          ) : (
            <>
              <div className="Main-Create-Blood">
                <div className="container">
                  <h4>Create New Story</h4>
                  <Form onSubmit={insertStory}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Title"
                        onChange={(e) => {
                          setNamee(e.target.value);
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

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Image</Form.Label>
                      <Form.Control
                        type="file"
                        placeholder="Image"
                        onChange={handleUpload}
                      />
                    </Form.Group>

                    <button variant="primary" type="submit">
                      {" "}
                      Create{" "}
                    </button>
                  </Form>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
}

export default MainPageD;
