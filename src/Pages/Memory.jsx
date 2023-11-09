import { useEffect, useState } from "react";
import SingleCard from "../components/SingleCardMemory";
import Navbar from "../components/Navbar";
import "../Styles/Memory.scss";

const cardImages = [
  { src: "./src/assets/img/blue.jpg", matched: false },
  { src: "./src/assets/img/green.jpg", matched: false },
  { src: "./src/assets/img/orange.jpg", matched: false },
  { src: "./src/assets/img/spritz.jpg", matched: false },
  { src: "./src/assets/img/white.jpg", matched: false },
  { src: "./src/assets/img/yellow.jpg", matched: false },
];

function Memory() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //shuffle Cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    // not here
  };

  // compare 2 selected cards

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // reset choice & increase turn

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  //start a new game automatically

  useEffect(() => {
    shuffleCards();
  }, []);
  return (
    <>
      <Navbar />
      <section className="memory-ctn">
        <div className="memory">
          <button onClick={shuffleCards}> New Game</button>

          <div className="card-grid">
            {cards.map((card) => (
              <SingleCard
                key={card.id}
                card={card}
                handleChoice={handleChoice}
                flipped={
                  card === choiceOne || card === choiceTwo || card.matched
                }
                disabled={disabled}
              />
            ))}
          </div>
          <p>Tours: {turns}</p>
        </div>
      </section>
    </>
  );
}

export default Memory;
