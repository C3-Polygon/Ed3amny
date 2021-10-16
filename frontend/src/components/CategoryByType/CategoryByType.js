import React , { useState, useEffect }from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from 'react-bootstrap/ProgressBar';


function CategoryByType() {
    const { id } = useParams();
    const [cate, setCate] = useState();
    useEffect(() => {
        axios.get(`http://localhost:5000/fundraiser/typee/${id}`)
          .then((res) => {
            setCate(res.data.result);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [id]);
    return (
        <div className="Main-Topfundraiser">
            
        <div className="container">
        {id}
            <h2>Categories</h2>
            <div className="row">
        {cate &&
            cate.map((data) => {
                
            return <div key = {data.id} className="col-lg-4 col-md-12">
                <div className="mainViewfundraiser">
                    <img src={data.img} alt='not found photo'/>
                    <div className="mainViewfundraiserText">
                        <h5>{data.title}</h5>
                        <p>{data.descriptionn}</p>
                        <ProgressBar variant="success" now={Math.round((data.current_target / data.targett) * 100)}/>
                        <span className="raised">${data.current_target} raised of</span> <span>${data.targett}</span>
                    </div>
                </div>
                 </div>;
            })
            }
            </div>
        </div>
    </div>
    )
}

export default CategoryByType
