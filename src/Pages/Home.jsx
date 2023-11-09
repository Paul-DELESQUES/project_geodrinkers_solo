import CardListHome from "../components/CardListHome";
import dataCards from "../datas/DataCardsHome";
import "../Styles/Home.scss";

function Home() {
  return (
    <div className="home-ctn">
      <CardListHome dataCards={dataCards} />
    </div>
  );
}

export default Home;
