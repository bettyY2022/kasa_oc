import { useState } from "react";
import arrow_forward from "../arrow_forward.svg";
import arrow_backward from "../arrow_backward.svg";
import "../components/Carousel.css"

export default function Carousel({ images }) {
  const [index, setIndex] = useState(0);
  return (
    <div className="slider">
      <img className="slider-image" alt="logements"  src={images[index]} />
      <img 
        src={arrow_backward}
        alt="flèche vers la gauche"
        className="arrow_backward"
        onClick={() => setIndex(index === 0 ? images.length - 1 : index - 1)}
      />
      <img
        src={arrow_forward}
        alt="flèche vers la droite"
        className="arrow_forward"
        onClick={() => setIndex(index === images.length - 1 ? 0 : index + 1)}
      />
      <div className="bulletPoint">
        {images.map((img, i) => (
          <li onClick={() => setIndex(i)}></li>
        ))}
      </div>
      <p  className="image-number">
        {index + 1}/{images.length}
      </p>
    </div>
  );
}
