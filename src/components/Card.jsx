function Card({ title, img }) {
  return (
    <div className="card-home">
      <div className="title-ctn">
        <h2>{title}</h2>
      </div>
      <div className="img-ctn">
        <img src={img} alt={title} />
      </div>
    </div>
  );
}

export default Card;
