import { Link } from "react-router-dom";
import "../components/Card.css";

function Card(props) {
  return (
    <Link to={`/logement/${props.logement.id}`}>
      <div
        className="card"
        style={{
          backgroundImage: `url(${props.logement.cover})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
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
