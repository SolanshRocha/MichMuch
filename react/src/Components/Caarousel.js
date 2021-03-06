import React from 'react';
import './films.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Carousel} from 'react-bootstrap';
// import image1 from '../Images/image1.jpg';

function Caarousel() {
  return (
    <div className="container-fluid">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./Images/image1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./Images/image1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./Images/image1.jpg"            
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Caarousel;
