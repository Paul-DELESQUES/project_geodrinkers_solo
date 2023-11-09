import EarthCanvas from "../components/Earth";
import Navbar from "../components/Navbar";
import "../Styles/SpaceMap.scss";

function SpaceMap() {
  return (
    <>
      <Navbar />
      <div className="space-ctn">
        <EarthCanvas />
      </div>
    </>
  );
}

export default SpaceMap;
