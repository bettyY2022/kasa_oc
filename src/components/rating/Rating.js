import star from "../../images/star.svg";
import starC from "../../images/starC.svg";

export function Rating({ value }) {
  const stars = [];
  for (let i = 0; i < Number(value); i++) {
    stars.push(<img key={i} src={starC} alt="star" />)
  }
  for (let i = 0; i < 5 - Number(value); i++) {
    stars.push(<img key={i + Number(value)} src={star} alt="star" />)
  }
  return <div >{stars}</div>;
}
