import { useParams } from "react-router-dom";
import logements from "../logements.json";
import "../pages/pages.css"
import "../components/Collapse"

function Details() {
  // get id from url react-router
  const { logementID } = useParams();
  const data = logements.find((logement) => logement.id === logementID);
  return (
    <div>
      <img alt="logements" className="slider" src={data.cover} />
      <p className="content">
        <b>{data.title}<br></br></b>
        {data.location}
      </p>
      <div className="description">
        {data.description}  
        {data.equipements} 
      </div>
      <img src={data.pictures} alt="appartements" />

    </div>
  );
}

export default Details;
