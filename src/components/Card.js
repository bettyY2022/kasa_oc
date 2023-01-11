import "../components/Card.css";

function Card(props) {
  return (
    <div
      className="card"
      style={{ padding: 20, backgroundImage: `url(${props.logement.cover})` }}
    >
      <div>
        <p style={{ color: "white" }}>{props.logement.title}</p>
        <p style={{ color: "white" }}>{props.logement.location}</p>
      </div>
    </div>
  );
}

export default Card;
