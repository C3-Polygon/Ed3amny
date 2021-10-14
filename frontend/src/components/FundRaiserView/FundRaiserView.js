import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Route, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";
const FundRaiserView = () => {
  const { id } = useParams();
  const history = useHistory();
  const [fundRaiserView, setFundRaiserView] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/fundraiser/id/${id}`)
      .then((res) => {
        console.log("res", res.data.result);
        setFundRaiserView(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="MainSectionFundRaiserView">
          <div className="Contect-Main-Section">
            {fundRaiserView &&
              fundRaiserView.map((elem) => {
                return (
                  <div className="fundRaiserView">
                      <h1> {elem.country} </h1>
                      <h1> {elem.targett}  </h1>
                      <h1> {elem.current_target} </h1>
                      <h1> {elem.descriptionn} </h1>
                    <div className="content">
                      <img src={elem.img} />
                      <h5>{elem.title}</h5>
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

export default FundRaiserView;
