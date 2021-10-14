
import React , { useState , useEffect }from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel';
import './Stories.css';


function Stories() {
  const [story, setStory] = useState();
  useEffect(() => {
    axios.get(`http://localhost:5000/admin/story`).then((result) => {
     setStory(result.data.allData)
    }).catch((err) => {
        console.log(err);
    },)
  },[]);
    return (
        <div className="Main-Stories">
            <div className='container'>
            <Carousel fade>
            {story&&story.map((data)=>{
              return(
               

                  <Carousel.Item className="">
                    <div className='Slider-Show'>
                    <div><h3>{data.namee}</h3>
                    <p>{data.descriptionn}</p></div>
                  <img
                    className="d-block w-100"
                    src={data.img}
                    alt="First slide"
                  />
                  </div>
                </Carousel.Item>

              )
            })}
            </Carousel>
            </div>
           
        </div>
    )
}

export default Stories
