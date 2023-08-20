import React from 'react';
import { Carousel } from 'react-bootstrap';
import hero from '../assets/hero.jpeg'
import hero2 from '../assets/hero2.jpeg'
import hero3 from '../assets/hero3.jpeg' 

const HeroCarousel = () => {
  return (
    <Carousel fade controls={false} interval={3000} pause={false}>
      {/* Slide 1 */}
      <Carousel.Item>
        <img
          className="d-block w-100 full width"
          src={hero}
          alt="First slide"
        />
        <Carousel.Caption >
          <h3>Slide 1 Title</h3>
          <p>Slide 1 Description</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      {/* Slide 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={hero2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Slide 1 Title</h3>
          <p>Slide 1 Description</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      {/* Slide 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={hero3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Slide 1 Title</h3>
          <p>Slide 1 Description</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
};

export default HeroCarousel;