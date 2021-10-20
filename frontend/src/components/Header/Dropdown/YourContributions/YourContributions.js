import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Table from "react-bootstrap/Table";
import moment from 'moment'

const YourContributions = () => {
    console.log("we entered your contributions page");

  const [userDonations, setUserDonations] = useState([]);
//   const [state, setstate] = useState()
  let userIdSave = localStorage.getItem("CurrentUserId");
  let tokenSave = localStorage.getItem("token");


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
  return (
      <>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
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
                <tr >
                  <td>{elm.campaign_id}</td>
                  <td>{moment(elm.created_at).format('DD/MM/YYYY')}</td>
                  <td>{elm.amount}</td>
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
