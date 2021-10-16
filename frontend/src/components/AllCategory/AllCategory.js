import React , { useState, useEffect}from 'react'
import './AllCategory.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillCaretLeft} from "react-icons/ai";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AllCategory = ()=>{
    const history = useHistory();
    const [category, setCategory] = useState();
    useEffect(() => {
        axios.get(`http://localhost:5000/fundraiser/categorys/categorys/categorys`)
          .then((res) => {
            setCategory(res.data.allData);
          })
          .catch((err) => {
            console.log(err);
          });
      },[]);


    return (
        <div className='Main-all-category'>
            <div className='container'>

                <div className='Back-To-Home'>
                    <span onClick={()=>{history.push('/')}}> <AiFillCaretLeft/> Home </span>

                    <h1>Start a Fundraiser</h1>
                    <h6>People around the world are raising money for what they are passionate about.</h6>
                    <button type="button" onClick={()=>{history.push("/fundraiser")}}>Start GoFundMe</button> 
                </div>


                {/** Fundraising categories */}

                <div className="Fundraising-categories">
                    <h3>Fundraising categories</h3>

                    <div class='row viewCategory'>
                        {category&&category.map((element)=>{
                            return (

                                    <div className="col-lg-4">

                                        <img src={element.img}/>
                                        <div>
                                        <h6>{element.namee}</h6>
                                        </div>
                                    </div>

                            )
                        })}


                    </div>
                </div>
            </div>
        </div>
    )
}
export default AllCategory
