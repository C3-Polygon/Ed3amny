import React , { useState, useEffect }from 'react'
import { useParams } from "react-router-dom";
import {useHistory} from 'react-router-dom';
import axios from "axios";
import './CategoryByType.css'
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from 'react-bootstrap/ProgressBar';



function CategoryByType() {
    const history = useHistory()
    const { id } = useParams();
    const [cate, setCate] = useState();
    const [categoryname, setCategoryname] = useState();

       
    useEffect(() => {
        axios.get(`http://localhost:5000/fundraiser/category/categorys/categorys/${id}`)
          .then((res) => {
            setCategoryname(res.data.Data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [id]);

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
            <div className="row category-name-section"> 
            {categoryname&&categoryname.map((category, index)=>{
                return(
                  
                    <>
                      <div className='col-lg-6' key={index}>
                          <h3>{category.namee}</h3>
                          
                          <h5>{category.title}</h5>
                          
                          <p>{category.decc}</p>

                          <button onClick={()=>{history.push('/fundraiser')}}>Start a GoFundMe</button>
                    </div>
                    {/**Right Section */}

                    <div className="col-lg-6">

                        <img src={category.img}/>

                    </div>
                    </>
                )
            })}
            </div>
            <div className="row">
        {cate &&
            cate.map((data,index) => {
                
            return <div key = {index} className="col-lg-4 col-md-12">
                <div className="mainViewfundraiser">
                    <img src={data.img} alt='Photo not found' alt="NOT FOUND"/>
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
