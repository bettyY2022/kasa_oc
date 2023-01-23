import banner from "../../images/banner.png";
import "./Banner.css";

function Banner() {
  return (
    <div className="cover">
      <img className="imgAccueil" src={banner} alt="paysage" />
      <p className="p-banner">Chez vous, partout et ailleurs</p>
    </div>
  );
}

export default Banner;
