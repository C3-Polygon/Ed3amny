import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Table from "react-bootstrap/Table";
import moment from 'moment'
import { useHistory } from "react-router-dom";
const YourContributions = () => {
    console.log("we entered your contributions page");

  const [userDonations, setUserDonations] = useState([]);
//   const [state, setstate] = useState()
  let userIdSave = localStorage.getItem("CurrentUserId");
  let tokenSave = localStorage.getItem("token");
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/Contribution/${userIdSave}`)
      .then((result) => {
          console.log("Donation data",result.data.result)
         setUserDonations(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const viewBatata = (data) => {
    history.push(`/fundraiserView/${data.campaign_id}`);
}

  return (
      <>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Date</th>
          <th>Ammount</th>
        </tr>
      </thead>
      {userDonations &&
            userDonations.map((elm, i) => {
              return (
                <>
                <tbody>
                <tr onClick = {() => viewBatata(elm)}>
                  <td >{elm.campaign_id}</td>
                  <td>{elm.title}</td>
                  <td>{moment(elm.created_at).format('llll')}</td>
                  <td>{elm.amount/100}</td>
                </tr>
              </tbody>
              </>
           );
            })}
    </Table>
    </>
  );
};

export default YourContributions;
