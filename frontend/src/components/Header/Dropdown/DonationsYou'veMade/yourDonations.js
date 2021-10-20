import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Table from 'react-bootstrap/Table';

const yourDonations = () => {

    return (
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Ammount</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          
         
        </tbody>
      </Table>
    )
}

export default yourDonations
