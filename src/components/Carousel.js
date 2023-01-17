import { useState } from "react";
import arrow_forward from "../arrow_forward.svg";
import arrow_backward from "../arrow_backward.svg";

export default function Carousel({ images }) {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <img alt="logements" className="slider" src={images[index]} />
      <img
        style={{ backgroundColor: "red" }}
        src={arrow_backward}
        alt="arrow_backward"
        className="arrow_backward"
        onClick={() => setIndex(index === 0 ? images.length - 1 : index - 1)}
      />
      <img
        src={arrow_forward}
        style={{ backgroundColor: "red" }}
        alt="arrow_forward"
        className="arrow_forward"
        onClick={() => setIndex(index === images.length - 1 ? 0 : index + 1)}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {images.map((img, i) => (
          <li style={{ fontSize: 30 }} onClick={() => setIndex(i)}></li>
        ))}
      </div>
      <p>
        {index + 1}/{images.length}
      </p>
    </div>
  );
}
