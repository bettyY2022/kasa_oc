import banner from "./banner.png";
import "../components/Banner.css"

function Banner() {
  return (
    <div className="cover">
         <img className="imgAccueil" src ={banner} alt="paysage"/>
      <p >Chez vous, partout et ailleurs</p>
    </div>
  );
}

export default Banner;
