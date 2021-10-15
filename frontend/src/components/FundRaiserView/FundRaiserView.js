import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Route, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";
import './FundRaiserView.css';
import Stripe from "../services/payment/Stripe";
import Share from "../services/Share/shareViaFacebook";
import  ProgressBar  from 'react-bootstrap/ProgressBar';
import { AiOutlineDownload ,AiOutlineMoneyCollect} from "react-icons/ai";

const FundRaiserView = () => {
  const { id } = useParams();
  const history = useHistory();
  const [fundRaiserView, setFundRaiserView] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/fundraiser/id/${id}`)
      .then((res) => {
        setFundRaiserView(res.data.result);
        console.log("lololo", res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
      <> 
      <div className="container">
        <div className="MainSectionFundRaiserView">
          <div className="row">
            {fundRaiserView &&
              fundRaiserView.map((elem,index) => {
                  return (
                 <>
                 {/* left section*/ }
                  <div key={index} className="col-lg-8">                        
                  <h2 class='title-fundRaiserView'>{elem.title}</h2>
                  <img src={elem.img} />
                  <div className="context-text-funRaiserView"> 
                  <p className="create-fundRaiserView">Created : {elem.created_at} </p>
                  <p> {elem.descriptionn} </p>
                  </div>
                 
                  <div className="content"> 
                      <Share />
                      <Stripe />
                    </div>
                  </div>
                  
                 {/* right section*/ }
                 <div className="col-lg-4">
                 <div className="donation-fundRaiserView">
                 <span className="target">${elem.current_target}</span> <span> raised of ${elem.targett} goal</span>
                 <ProgressBar variant="success" now={Math.round((elem.current_target / elem.targett) * 100)}/>

                 <button className="share-fundRaiserView"> <AiOutlineDownload className='share-facebook'/> Share</button>

                 
                 <button className="share-fundRaiserView"> <AiOutlineMoneyCollect className='share-facebook'/> donation now</button>
                 
                 </div>
                 
                   </div>
                 </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FundRaiserView;
