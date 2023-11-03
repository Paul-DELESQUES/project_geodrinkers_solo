import "../components/Styles/SingleCardMemory.scss";

function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card-memory">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="card memory front" className="front" />
        <img
          src="./src/assets/img/cover.png"
          alt="card memory back"
          className="back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default SingleCard;
