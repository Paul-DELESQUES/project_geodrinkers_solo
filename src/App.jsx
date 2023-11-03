import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Start from "./Pages/Start";
import Home from "./Pages/Home";
import dataCards from "./components/datas/DataCardsHome";
import SpaceMap from "./Pages/SpaceMap";
import Memory from "./Pages/Memory";
import "./components/Styles/App.scss";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Start />
      <Home dataCards={dataCards} />
      <SpaceMap />
      <Memory />
    </BrowserRouter>
  );
}

export default App;
