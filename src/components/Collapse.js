import "../pages/pages.css";
import { useState } from "react";
import arrow_up from "../arrow_up.svg";
import arrow_down from "../arrow_down.svg";

export default function Collapse(props) {
  const [isOpen, setIsOpen] = useState(true);
  let arrow;
  if (isOpen) arrow = <img src={arrow_up} alt="up" />;
  else arrow = <img src={arrow_down} alt="down" />;

  return (
    <div style={{ display: "flex", flexDirection: "column", margin: 10 }}>
      <div className="borderDescription"
        onClick={() => setIsOpen(!isOpen)}>
        <p> {props.title}</p>
        {arrow}
      </div>
      {isOpen && (
        <div className="description" >
          <p>{props.content}</p>
        </div>
      )}
    </div>
  );
}
