import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./YourFundraisers.css";
import { useHistory } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";

// import { EditFundraiser } from "./EditFundraiser";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { useDispatch, useSelector } from "react-redux";

const GetAllFundraiserByUser = () => {
  const history = useHistory();
  let tokenSave = localStorage.getItem("token");
  let userIdSave = localStorage.getItem("CurrentUserId");
  const [usersFundraisers, setUsersFundraisers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/fundraiser/${userIdSave}`, {
        headers: {
          Authorization: `Bearer ${tokenSave}`,
        },
      })
      .then((result) => {
        setUsersFundraisers(result.data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  const EditFundraiser = (id) => {
    history.push(`/edityourfundraiser/${id}`);
  };

  return (
    <>
      <div className="Main-your-Fundraisers">
        <div className="container">
          <div className="Main-title-Fundreiser">
            <h4>Your fundraisers</h4>
            <button
              onClick={() => {
                history.push("/fundraiser");
              }}
            >
              {" "}
              <AiOutlinePlus /> Start a new fundraiser{" "}
            </button>
          </div>

          <div className="row">
            {usersFundraisers &&
              usersFundraisers.map((post, index) => {
                return (
                  <div key={index} className="col-lg-4">
                    <div className="Main-View-YourFundraisers">
                      <img src={post.img} />
                      <div className="Main-view-content">
                        <h6 className="PostTitleClass">{post.title}</h6>
                        {/* <p> Created Fundraisers: {post.created_at}</p> */}
                        <hr></hr>
                        <div className="manage-Your-fundraisers">
                          <span onClick={() => EditFundraiser(post.id)}>
                            Manage
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default GetAllFundraiserByUser;
