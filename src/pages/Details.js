import { useParams } from "react-router-dom";
import logements from "../logements.json";
import "../pages/pages.css";
import "../components/Collapse";
import Tag from "../components/Tag";
import { Rating } from "../components/Rating";
import Collapse from "../components/Collapse";

function Details() {
  // get id from url react-router
  const { logementID } = useParams();
  const data = logements.find((logement) => logement.id === logementID);
  return (
    <div >
      <img alt="logements" className="slider" src={data.cover} />
      <p className="content">
        <b>
          {data.title}
          <br></br>
        </b>
        {data.location}
      </p>
      <div style={{ display: "flex" }}>
        {data.tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
      <div >
        <Rating value={data.rating}  />
        <Collapse title="Description" content={data.description} />
        <Collapse title="Équipements" content={data.equipments} />
      </div>
    </div>
  );
}

export default Details;
