import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";
import "../../components/card/Card.css";
import logements from "../../logements.json";
import "./Home.css";

function Home() {
  const cards = logements.map((logement, i) => (
    <Card key={i} logement={logement} />
  ));
  return (
    <div>
      <Banner />
      <div className="justifyContent" >
        <div className="CardKasa">{cards}</div>
      </div>
    </div>
  );
}

export default Home;
