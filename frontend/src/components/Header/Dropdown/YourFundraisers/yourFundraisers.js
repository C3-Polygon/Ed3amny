import { useDispatch, useSelector } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

import axios, { Axios } from "axios";

// import "./" the css

const getAllFundraiserByUser = async () => {
  let tokenSave = localStorage.getItem("token");
  let userIdSave = localStorage.getItem("CurrentUserId");
  console.log("userIdSave", userIdSave);
  const state2 = useSelector((state2) => {
    return { userId: state2.userId.userId };
  });

  let userId = state2.userId;

  axios
    .get(`http://localhost:5000/fundraiser/${userId}`, {
      headers: { Authorization: `Bearer ${tokenSave}` },
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

return <></>;

export default getAllFundraiserByUser;
