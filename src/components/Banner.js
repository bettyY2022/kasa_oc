import banner from "../banner.png";

function Banner() {
  return (
    <div
      style={{
        minHeight: 200,
        backgroundImage: `url(../banner.png)`,
      }}
    >
      <p style={{ fontSize: 30, textAlign: "center" }}>Lorem Ipsum</p>
    </div>
  );
}

export default Banner;
