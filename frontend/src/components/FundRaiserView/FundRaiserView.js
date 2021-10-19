import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Route, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";
import "./FundRaiserView.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Stripe from "../services/payment/Stripe";
import Share from "../services/Share/shareViaFacebook";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "../../reducers/Donation/ImageReducer";
import { setTitle } from "../../reducers/Donation/TitleReducer";
import { setPostId } from "../../reducers/Donation/PostId"
import {
  AiOutlineDownload,
  AiOutlineMoneyCollect,
  AiOutlineCloseSquare,
} from "react-icons/ai";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const FundRaiserView = () => {
  const [sharePopup, setSharePopup] = useState(false);

  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch()
  const [fundRaiserView, setFundRaiserView] = useState([]);
  
  // const openSharePopup = () => {
  //   setSharePopup(true);
  // };
  // const exit = () => {
  //   setSharePopup(false);
  // };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/fundraiser/id/${id}`)
      .then((res) => {
        setFundRaiserView(res.data.result);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const senderr =(title , img)=>{
    dispatch(setTitle(title))
    dispatch(setImage(img))
    dispatch(setPostId(id))
    console.log("batata",id )
    history.push('/donation')
  }
  return (
    <>
      <div className="container">
        <div className="MainSectionFundRaiserView">
          {sharePopup && (
            <div className="pop-fundraiser">
              <div className="pop-fundraiser-child">
                <AiOutlineCloseSquare className="close-pop" onClick={() => {setSharePopup(!sharePopup)}} />
                <h1>Help by sharing</h1>
                <p>
                  Fundraisers shared on social networks raise up to 5x more
                  (SOON)
                </p>
                <hr></hr>
                <Share />
                <p>Facebook</p>

                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Copy URL"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text
                    id="basic-addon2"
                    onClick={() => {
                      navigator.clipboard.writeText(this.state.textToCopy);
                    }}
                  >
                    Copy
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </div>
          ) 
          }

          <div className="row">
            {fundRaiserView &&
              fundRaiserView.map((elem, index) => {
                return (
                  <>
                    {/* left section*/}
                    <div key={index} className="col-lg-8">
                      <h2 className="title-fundRaiserView">{elem.title}</h2>
                      <img src={elem.img} />
                      <div className="context-text-funRaiserView">
                        <p className="create-fundRaiserView">
                          Created : {elem.created_at}{" "}
                        </p>
                        <p> {elem.descriptionn} </p>
                      </div>

                      <div className="content">
                        {/* <Stripe /> */}
                      </div>
                    </div>

                    {/* right section*/}
                    <div className="col-lg-4">
                      <div className="donation-fundRaiserView">
                        <span className="target">${elem.current_target}</span>{" "}
                        <span> raised of ${elem.targett} goal</span>
                        <ProgressBar
                          variant="success"
                          now={Math.round(
                            (elem.current_target / elem.targett) * 100
                          )}
                        />
                        <button className="share-fundRaiserView" onClick={()=>{setSharePopup(!sharePopup)}}>
                          {" "}
                          <AiOutlineDownload
                            className="share-facebook"
                          />{" "}
                          Share
                        </button>
                        <button className="share-fundRaiserView" onClick= {()=>senderr(elem.title , elem.img)}>
                          {" "}
                          <AiOutlineMoneyCollect className="share-facebook" />{" "}
                          donation now
                        </button>
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
