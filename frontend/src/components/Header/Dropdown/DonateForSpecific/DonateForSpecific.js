import React , { useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import axios from "axios";


function DonateForSpecific() {
    const history = useHistory();
    const [cate, setCate] = useState();
    useEffect(() => {
        axios.get(`http://localhost:5000/fundraiser/categories/categories`).then((res)=>{
            setCate(res.data.allData); 
        }).catch((error)=>{
            console.log(error);
        })
        
      }, []);
      const categoriesPush = (id)=>{
          history.push(`/category/${id}`);
      }
    return (
        <div>
        {[DropdownButton].map((DropdownType, idx) => (
      <DropdownType
        as={ButtonGroup}
        key={idx}
        id={`dropdown-button-drop-${idx}`}
        size="sm"
        variant="none"
        title="fundraise for "
      >
        {cate&&cate.map((ele)=>{
            return(
                 <div>
                     <Dropdown.Item onClick={()=>{categoriesPush(ele.id)}}>{ele.namee}</Dropdown.Item>

                 </div>
            )
        })}
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4" className='see-all-categories'>See all</Dropdown.Item>
      </DropdownType>
    ))}
        </div>
    )
}


export default DonateForSpecific