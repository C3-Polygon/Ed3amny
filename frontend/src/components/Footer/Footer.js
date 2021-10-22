import React , { useState, useEffect }from "react"
import './Footer.css';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

/**axios.get(`http://localhost:5000/fundraiser/categorys/categorys/categorys`). */
const Footer = () => {
    const history = useHistory();
const [getcategorys, setGetcategorys] = useState();
useEffect(() => {
    axios.get(`http://localhost:5000/fundraiser/categorys/categorys/categorys`).then((res)=>{
        setGetcategorys(res.data.allData); 
    }).catch((error)=>{
        console.log(error);
    })
    
  }, []);

  const cate = (id)=>{
      history.push(`/category/${id}`);
  }
    return(
        <footer className="page-footer">
        <div className="container">

            <div className="Main-footer">
                <div className="logo-footer">
                    <h5>Logo Name </h5>
                    <p>Go a FundME</p>
                </div>


                <div className="categorys">
                    {/* <ul>
                        {getcategorys&&getcategorys.map((ele)=>{
                            return(
                                <li onClick={()=>{cate(ele.id)}}> <a>{ele.namee}</a></li>
                            )
                        })}
                    </ul> */}
                
                <h5 className="">FUNDRAISE FOR</h5>
                <ul className="list-unstyled">
                    <li> {getcategorys&&getcategorys.map((ele)=>{
                            return(
                                <li onClick={()=>{cate(ele.id)}}> <a>{ele.namee}</a></li>
                            )
                        })}</li>
                </ul>
            
                </div>


                <div className="option">
                    <h5>Link</h5>
                </div>
            </div>
            
    

        <div className="footer-copyright text-center py-3">© 2021 Copyright:
            <a href="#!"> Ed3amny</a>
        </div>
        </div>
    </footer>
    )
}
export default Footer