import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useHistory } from "react-router-dom";

export const SearchResults = () => {
  const [search, setSearch] = useState();
  const history = useHistory();

  const state = useSelector((state) => {
    console.log(state, "sdsadadasd");
    return { text1: state.text1.text1 };
  });

  useEffect(() => {
    const loadTitle = async () => {
      const response = await axios.get(
        `http://localhost:5000/search?name=${state.text1}`
      );
      console.log("response.data.search", response.data.search);
      setSearch(response.data.search);
    };
    loadTitle();
  }, [state.text1]);

  const ViewFundRaiser = (data) => {
    history.push(`/fundraiserView/${data.id}`);
  };

  return (
    <div className="row">
      {search &&
        search.map((data) => {
          return (
            <div
              key={data.id}
              className="col-lg-4 col-md-12"
              onClick={() => {
                ViewFundRaiser(data);
              }}
            >
              <div className="mainViewfundraiser">
                <img src={data.img} alt="not found photo" />
                <div className="mainViewfundraiserText">
                  <h5>{data.title}</h5>
                  <p>{data.descriptionn}</p>
                  <ProgressBar
                    variant="success"
                    now={Math.round((data.current_target / data.targett) * 100)}
                  />
                  <span className="raised">
                    ${data.current_target} raised of
                  </span>{" "}
                  <span>${data.targett}</span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
