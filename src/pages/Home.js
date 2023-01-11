import Banner from "../components/Banner";
import Card from "../components/Card";
import "../components/Card.css"

function Home() {
  return (
    <div>
      <Banner />
      <div className="CardKasa" >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
