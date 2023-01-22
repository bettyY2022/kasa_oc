import Banner from "../components/Banner";
import Card from "../components/Card";
import "../components/Card.css";
import logements from "../logements.json";

function Home() {
  const cards = logements.map((logement, i) => (
    <Card key={i} logement={logement} />
  ));
  return (
    <div>
      <Banner />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div className="CardKasa">{cards}</div>
      </div>
    </div>
  );
}

export default Home;
