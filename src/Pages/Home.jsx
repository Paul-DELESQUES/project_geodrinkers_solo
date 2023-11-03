import Card from "../components/Card";
import "../components/Styles/Home.scss";

function Home({ dataCards }) {
  return (
    <div className="home-ctn">
      {dataCards.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
}

export default Home;
