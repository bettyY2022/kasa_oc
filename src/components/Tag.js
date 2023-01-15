export default function Tag(props) {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "red",
        borderRadius: 10,
        margin: 5,
      }}
    >
      <span
        style={{
          color: "white",
          padding: 5,
          paddingRight: 10,
          paddingLeft: 10,
          fontSize: 12,
        }}
      >
        {props.text}
      </span>
    </div>
  );
}
