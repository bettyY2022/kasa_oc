import { useParams, useNavigate } from "react-router-dom";
import logements from "../../logements.json";
import "../../components/collapse/Collapse";
import Tag from "../../components/tag/Tag";
import { Rating } from "../../components/rating/Rating";
import Collapse from "../../components/collapse/Collapse";
import Carousel from "../../components/carousel/Carousel";
import "../../components/carousel/Carousel.css";
import "./Details.css";

function Details() {
  // get id from url by react-router
  const { logementID } = useParams();
  const navigate = useNavigate();
  const data = logements.find((logement) => logement.id === logementID);
  if (data === undefined) {
    navigate("/404");
  }
  return (
    <div>
      <div className="bodyDetails">
        <div className="widthDetails">
          <div>
            <Carousel images={data.pictures} />
          </div>
          <div className="Logement">
            <div className="informationsLogement">
              <span className="content">{data.title}</span>
              <span style={{ color: "#FF6060" }}>{data.location}</span>
              <div className="tagInformation">
                {data.tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </div>
            <div className="host">
              <div className="hostInformations">
                <div className=" hostName">
                  <span>{data.host.name}</span>
                </div>
                <div>
                  <img className="hostImg" src={data.host.picture} alt="host" />
                </div>
              </div>
              <div className="stars">
                <Rating key={data.id} value={data.rating} />
              </div>
            </div>
          </div>
          <div className="descriptionEquipement">
            <div className="box">
              <Collapse
                height={data.equipments.length * 30}
                title="Description"
                content={data.description}
              />
            </div>
            <div className="box">
              <Collapse
                height={data.equipments.length * 30}
                title="Équipements"
                content={data.equipments.map((elt, index) => (
                  <p key={index} className="listEquipement">
                    {elt}
                  </p>
                ))}
                eqs={data.equipments.length}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
