function Card() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        minWidth: 250,
        minHeight: 250,
        backgroundColor: "red",
        margin: 20,
      }}
    >
      <p style={{ margin: 0, padding: 0, marginLeft: 10 }}>Title</p>
      <p style={{ margin: 0, padding: 0, marginBottom: 10, marginLeft: 10 }}>
        Location
      </p>
    </div>
  );
}

export default Card;
