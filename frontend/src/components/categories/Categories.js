import React , { useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import axios from "axios";

function Categories() {
    const [cate, setCate] = useState();
    useEffect(() => {
        axios.get(`http://localhost:5000/fundraiser/categories/categories`).then((res)=>{
            console.log(res.data);
            setCate(res.data.allData); 
        }).catch((error)=>{
            console.log(error);
        })
        
      }, []);

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
                     <Dropdown.Item>{ele.namee}</Dropdown.Item>
                 </div>
            )
        })}
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">See all</Dropdown.Item>
      </DropdownType>
    ))}
        </div>
    )
}

export default Categories
