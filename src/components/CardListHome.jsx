import { Link } from "react-router-dom";
import Card from "../components/Card";

function CardListHome({ dataCards }) {
  const firstCard = dataCards[0];
  const secondCard = dataCards[1];

  return (
    <>
      <Link to="/map" className="card-map-link">
        <Card title={firstCard.title} img={firstCard.img} />
      </Link>
      <Link to="/memory" className="card-map-link">
        <Card title={secondCard.title} img={secondCard.img} />
      </Link>
    </>
  );
}

export default CardListHome;
