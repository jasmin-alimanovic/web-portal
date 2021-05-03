const Reklama = ({ height, img }) => {
  return (
    <div
      className="card"
      style={{
        marginTop: "1rem",
        marginBottom: "3rem",
        width: "100%",
        height: height ?? "auto",
      }}
    >
      <div className="card-image" style={{ width: "100%" }}>
        <figure className="image">
          <img src={img}></img>
        </figure>
      </div>
    </div>
  );
};

export default Reklama;
