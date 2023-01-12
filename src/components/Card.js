import "../components/Card.css";

function Card(props) {
  return (
    <div className="card" >
      <img alt="Cards" src={props.logement.cover} />
      <div className="titleLocation">
        <p >{props.logement.title}</p>
        <p >{props.logement.location}</p>
      </div>
    </div>
  );
}

export default Card;
