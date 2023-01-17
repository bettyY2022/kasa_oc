import Banner from "../components/Banner";
import Card from "../components/Card";
import "../components/Card.css";
import logements from "../logements.json";
import "../pages/pages.css";

function Home() {
  const cards = logements.map((logement, i) => (
    <Card key={i} logement={logement} />
  ));
  return (
    <div>
      <Banner />
      <div className="CardKasa">{cards}</div>
    </div>
  );
}

export default Home;
