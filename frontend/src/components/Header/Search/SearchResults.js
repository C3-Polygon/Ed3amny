import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useHistory } from "react-router-dom";
import './SearchResults.css';
import Pagination from 'react-bootstrap/Pagination';

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

  // const ViewFundRaiser = (data) => {
  //   history.push(`/fundraiserView/${data.id}`);
  // };

  // onClick={() => {
  //   ViewFundRaiser(data);
  // }}

  return (
    <div className="Main-search">
         <div className='container'>
           <p className='title-searchh'>Fundraisers for <span>"{state.text1}"</span> in all locations</p>
          <div className="row"> 
      {search &&
        search.map((data) => {
          return (
            <>
                <div
                    key={data.id}
                    className="col-lg-3 Main-ccc"
                  >
                    <div className="search-contect">
                     <div className="img-contect">
                     <img src={data.img} alt="not found photo" />
                     </div>
                      <div className="title-search">
                        <p>{data.title}</p>
                      </div>
                    </div>
                  </div>
            </>
          );
        })}
    </div>
    </div>
    </div>

  );
};
