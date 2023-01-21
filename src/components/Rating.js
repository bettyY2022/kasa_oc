import star from "../star.svg";
import starC from "../starC.svg";

export function Rating({ value }) {
  const star_pleine = <img src={starC} alt="star" />;
  const star_vide = <img src={star} alt="star" />;
  const stars = [];
  for (let i = 0; i < Number(value); i++) {
    stars.push(star_pleine);
  }
  for (let i = 0; i < 5 - Number(value); i++) {
    stars.push(star_vide);
  }
  return <div >{stars}</div>;
}
