import "../components/Collapse.css";
import { useState } from "react";
import arrow_up from "../images/arrow_up.svg";
import arrow_down from "../images/arrow_down.svg";

export default function Collapse(props) {
  const [isOpen, setIsOpen] = useState(true);
  let arrow;
  if (isOpen)
    arrow = <img className="arrowUp" src={arrow_up} alt="up"  />;
  else arrow = <img className="arrowDown" src={arrow_down} alt="down"  />;

  return (
    <div className="collapse" >
      <div className="borderDescription" onClick={() => setIsOpen(!isOpen)}>
        <p> {props.title}</p>
        {arrow}
      </div>
      {isOpen && (
        <div className="description">
          <p className="propsContent">{props.content}</p>
        </div>
      )}
    </div>
  );
}
