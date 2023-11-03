import { Link } from "react-router-dom";
import "../components/Styles/Start.scss";

function Start() {
  return (
    <section className="start-ctn">
      <video src="./src/assets/video/stars.mp4" autoPlay loop muted />
      <img src="./src/assets/img/geo.png" alt="Geodrinkers" />
      <div className="btn-ctn">
        <Link
          to="/"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <p>C'EST PARTI</p>
        </Link>
      </div>
    </section>
  );
}

export default Start;
