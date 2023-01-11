import Banner from "../components/Banner";
import Card from "../components/Card";

function Home() {
  return (
    <div>
      <Banner />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
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
