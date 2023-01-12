import { useParams } from "react-router-dom";
import logements from "../logements.json";

function Details() {
  // get id from url react-router
  const { logementID } = useParams();
  const data = logements.find((logement) => logement.id === logementID);
  return (
    <div>
      DetailsPage
      <img src={data.cover} width={600} height={"auto"} />
    </div>
  );
}

export default Details;
