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
    <div
      style={{
        width: "w-100",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ width: "85%" }}>
        <img alt="logements" className="slider" src={data.cover} />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "80%" }}>
            <p className="content">
              <p>{data.title}</p>
              {data.location}
            </p>
            <div style={{ display: "flex" }}>
              {data.tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  margin: 10,
                }}
              >
                <span style={{ marginBottom: 10 }}>{data.host.name}</span>
              </div>
              <div>
                <img
                  src={data.host.picture}
                  style={{ borderRadius: 75 }}
                  width={64}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Rating value={data.rating} />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flex: 2 }}>
          <div style={{ flex: 1, margin: 10 }}>
            <Collapse title="Description" content={data.description} />
          </div>
          <div style={{ flex: 1, margin: 10 }}>
            <Collapse
              title="Équipements"
              content={data.equipments.map((elt) => (
                <p style={{ marginTop: 0, marginBottom: 0 }}>{elt}</p>
              ))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
