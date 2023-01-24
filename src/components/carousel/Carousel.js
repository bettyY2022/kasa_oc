import { useState } from "react";
import arrow_forward from "../../images/arrow_forward.svg";
import arrow_backward from "../../images/arrow_backward.svg";
import "./Carousel.css";

export default function Carousel({ images }) {
  const [index, setIndex] = useState(0);
  const showControls = images.length > 1;
  return (
    <div className="slider">
      <img className="slider-image" alt="logements" src={images[index]} />
      {showControls && (
        <img
          src={arrow_backward}
          alt="flèche vers la gauche"
          className="arrow_backward"
          onClick={() => setIndex(index === 0 ? images.length - 1 : index - 1)}
        />
      )}
      {showControls && (
        <img
          src={arrow_forward}
          alt="flèche vers la droite"
          className="arrow_forward"
          onClick={() => setIndex(index === images.length - 1 ? 0 : index + 1)}
        />
      )}
      {showControls && (
        <div className="bulletPoint">
          {images.map((img, i) => (
            <li key={i} onClick={() => setIndex(i)}></li>
          ))}
        </div>
      )}
      <p className="image-number">
        {index + 1}/{images.length}
      </p>
    </div>
  );
}
