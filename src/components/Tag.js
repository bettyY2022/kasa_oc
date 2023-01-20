import "../components/Tag.css";

export default function Tag(props) {
  return (
    <div className="tag">
      <span className="tagText">
        {props.text}
      </span>
    </div>
  );
}
