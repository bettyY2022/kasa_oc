import { Link } from "react-router-dom";
import "./Card.css";

function Card(props) {
  return (
    <Link
      to={`/logement/${props.logement.id}`}
      className="textDecoration"
    >
      <div
        className="card"
        style={{
          backgroundImage: `url(${props.logement.cover})`,
        }}
      >
        <div className="cardTitle">
          <p className="titleLocation">{props.logement.title}</p>
          <p className="titleLocation">{props.logement.location}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
