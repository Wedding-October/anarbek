
import "./carousel.scss"

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
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

