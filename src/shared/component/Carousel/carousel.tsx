// import { useState } from "react";
// import { imgs } from "./data";

// const Slide = ({ title, description, image }) => (
//   <div className="slide">
//     <img src={imgs} alt={title} />
    
//   </div>
// );

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () =>
//     setCurrentIndex((prev) => (prev + 1) % cards.length);
//   const prevSlide = () =>
//     setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);

//   return (
//     <div className="carousel">
//       <button onClick={prevSlide}>‹</button>
//       <Slide {...imgs[currentIndex]} />
//       <button onClick={nextSlide}>›</button>
//     </div>
//   );
// };

// export default Slide
import "./carousel.scss"

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import cards from "./data";


const BootstrapCarousel = () => (
  <Carousel>
    {cards.map((card) => (
      <Carousel.Item key={card.id}>
        <img className="d-block w-150" src={card.image} alt={card.title}  />
        <Carousel.Caption>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default BootstrapCarousel;

