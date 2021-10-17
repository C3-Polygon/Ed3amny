import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Donation.css'
import { AiFillCaretLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Donation = () =>{
    const [amount , setAmount] = useState(0)
    const state = useSelector((state)=>{
        console.log('state' , state)
        return {img : state.img.img  }
      })
      const state1 = useSelector((state)=>{
        console.log('state' , state)
        return {title  : state.title.title }
      })
      
    return (
    <div className='main-donation'>
     <div className='container'>
        <div className='row'>
            <div className='col-lg-8 info-donation' >
                <button className='button-go-back'><AiFillCaretLeft/> Return to fundraiser</button>
                <hr></hr>
                <img src={state.img} />
                <h2>{state1.title}</h2>
                <h2>Enter your donation</h2>
                <input onChange={(e)=>{setAmount(e.target.value * 100)}}></input>



            </div>
            <div className='col-lg-4'>

            </div>

        </div>

     </div>
    
    
    
    
    </div>)
}

export default Donation