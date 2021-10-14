import React , { useState , useEffect }from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel'

function Stories() {
    return (
        <div className="Main-Stories">
            <div className='container'>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hanv9909.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
           
        </div>
    )
}

export default Stories
