import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import './YourContributions.css';
import Table from "react-bootstrap/Table";
import moment from 'moment'
import { useHistory } from "react-router-dom";

const YourContributions = () => {

  const [userDonations, setUserDonations] = useState([]);
  let userIdSave = localStorage.getItem("CurrentUserId");
  const history = useHistory();
  // let tokenSave = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/Contribution/${userIdSave}`)
      .then((result) => {
         setUserDonations(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

//   const viewBatata = (data) => {
//     history.push(`/fundraiserView/${data.campaign_id}`);
// }

  return (
      <div className="main-cont">
      <div className="container">
        <h4>Your Donations</h4>
   <Table striped bordered hover>
  <thead>
    <tr>
      <th>Date</th>
      <th>Title</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
          {userDonations &&
            userDonations.map((elm, i) => {
              return (
                <>
  <tr>
      <td>{moment(elm.created_at).format('llll')}</td>
      <td>{elm.title}</td>
      <td>${elm.amount/100}</td>
    </tr>
              </>
           );
            })}
  </tbody>
</Table>

<button onClick={()=>{history.goBack()}}>Back</button>
    </div>
    </div>
  );
};

export default YourContributions;

